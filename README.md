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

Configura `DATABASE_URL` en `.env` y ejecuta:

```bash
npx prisma migrate dev
```
