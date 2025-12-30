# Inquilista

Plataforma cívica para gestión de denuncias de inquilinos.

## MVP

Este es un MVP en desarrollo. La arquitectura y funcionalidades son mínimas y se extenderán según necesidad.

## Desarrollo

### Frontend (Next.js)

```bash
npm run dev:web
```

Abre [http://localhost:3000](http://localhost:3000)

### Backend (Hono)

```bash
npm run dev:api
```

API disponible en [http://localhost:3001](http://localhost:3001)

### Base de datos

Configura `DATABASE_URL` en `.env`. Para Supabase:

```
DATABASE_URL="postgresql://postgres:password@db.project.supabase.co:5432/postgres?sslmode=require"
```

**Nota:** La conexión local puede fallar si tu entorno no soporta IPv6. Esto es normal y funcionará correctamente en Cloudflare Workers que sí soportan IPv6.

**Importante:**
- Si tu contraseña contiene caracteres especiales, codifícalos en URL (`!` → `%21`, `*` → `%2A`, `@` → `%40`)
- La URL debe incluir `?sslmode=require`

Para ejecutar migraciones (requiere IPv6 o entorno compatible):

```bash
npx prisma migrate dev
```
