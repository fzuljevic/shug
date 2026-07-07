# My App

Full-stack monorepo with two Docker setups:

- Local development
- VPS deployment

No authentication, CI/CD, monitoring, or backup automation is included yet.

## Structure

```text
my-app/
  apps/
    web/                  # Next.js frontend
    api/                  # NestJS API + Prisma
  deploy/
    caddy/
      Caddyfile           # VPS reverse proxy config
  docker-compose.yml      # Local development
  docker-compose.vps.yml  # VPS deployment
  .env.example            # Local development env example
  .env.vps.example        # VPS env example
```

## Local Development

Local development uses:

- `docker-compose.yml`
- `.env.example`

Default local ports:

```text
Web:      http://localhost:3001
API:      http://localhost:4001
Postgres: localhost:5432
```

Create your local env file:

```bash
cp .env.example .env
```

Start local development:

```bash
docker compose up --build -d
```

Run local migrations:

```bash
docker compose exec api npm exec --workspace api -- prisma migrate dev
```

Check local API health:

```bash
curl http://localhost:4001/api/health
```

Check local database health:

```bash
curl http://localhost:4001/api/health/db
```

Open local web:

```text
http://localhost:3001
```

Stop local development:

```bash
docker compose down
```

Reset local development database only when needed:

```bash
docker compose down -v
docker compose up --build -d
docker compose exec api npm exec --workspace api -- prisma migrate dev
```

## VPS Deployment

VPS deployment uses:

- `docker-compose.vps.yml`
- `.env.vps`
- `deploy/caddy/Caddyfile`

Expected public domains:

```text
https://example.com
https://api.example.com
```

Caddy routes:

```text
example.com      -> web:3000
api.example.com  -> api:4000
```

Only Caddy publishes public ports:

```text
80/tcp
443/tcp
443/udp
```

These services are internal only:

- Web
- API
- Postgres

Postgres is not publicly exposed.

### DNS

Create DNS records before expecting HTTPS to work:

```text
example.com      A      YOUR_SERVER_IPV4
api.example.com  A      YOUR_SERVER_IPV4
```

Add `AAAA` records too if you use IPv6.

### VPS Env

Create the VPS env file:

```bash
cp .env.vps.example .env.vps
```

Edit `.env.vps` and set real values:

```env
POSTGRES_DB=my_app
POSTGRES_USER=app
POSTGRES_PASSWORD=change_me
DATABASE_URL=postgresql://app:change_me@postgres:5432/my_app?schema=public
NODE_ENV=production
WEB_DOMAIN=example.com
API_DOMAIN=api.example.com
NEXT_PUBLIC_API_URL=https://api.example.com
CORS_ORIGINS=https://example.com
```

Important: inside Docker, the API must connect to Postgres with the Docker
service name:

```env
DATABASE_URL=postgresql://USER:PASSWORD@postgres:5432/DB_NAME?schema=public
```

Do not use `localhost` for the API container database URL.

`NEXT_PUBLIC_API_URL` is baked into the Next.js production build. If it changes,
rebuild the web image:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps build web
docker compose -f docker-compose.vps.yml --env-file .env.vps up -d web
```

### First VPS Deploy

Build VPS containers:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps build
```

Start Postgres first:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps up -d postgres
```

Run safe production migrations:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps run --rm api npx prisma migrate deploy --schema apps/api/prisma/schema.prisma
```

Do not use `prisma migrate reset` on the VPS.

Start all services:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps up -d
```

Check API health through the domain:

```bash
curl https://api.example.com/api/health
```

Check DB health through the domain:

```bash
curl https://api.example.com/api/health/db
```

Open the web app:

```text
https://example.com
```

### VPS Logs

Show running services:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps ps
```

Follow Caddy logs:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps logs -f caddy
```

Follow API logs:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps logs -f api
```

Follow web logs:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps logs -f web
```

Stop the VPS stack:

```bash
docker compose -f docker-compose.vps.yml --env-file .env.vps down
```

Do not run `down -v` on the VPS unless you intentionally want to delete
database data.

## Health Endpoints

API health:

```text
GET /api/health
```

Database health:

```text
GET /api/health/db
```

Expected DB health response:

```json
{ "status": "ok", "database": "connected" }
```

## Deployment Notes

- Caddy handles HTTPS automatically after DNS points to the server.
- Keep secrets only in `.env` and `.env.vps`; do not commit real env files.
- Backups are the next step before running real users.
- CI/CD, monitoring, auth, and backup automation are intentionally not included yet.
