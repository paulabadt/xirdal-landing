# xirdal.com · Landing page

React + Vite. Estilo oscuro en negro, banner central con cupos limitados, CTA a WhatsApp y LinkedIn como única red social.

## Dónde cambiar cosas
Todo lo editable está en `src/config.js`:
- número de WhatsApp (`whatsapp`, con prefijo 57) y mensajes prellenados
- enlace de LinkedIn
- textos del banner (`banner`), incluida la fecha de inicio (`fecha`)

Los textos de las secciones están en `src/components/` (Services.jsx, Method.jsx, Course.jsx, About.jsx).

## Probarla en tu computador
```bash
npm install
npm run dev        # abre http://localhost:5173
npm run build      # genera la carpeta dist
```

## Publicarla en Vercel (la forma más rápida)
1. Sube esta carpeta a un repositorio nuevo de GitHub.
2. En vercel.com: **Add New → Project → Import** el repositorio.
   Vercel detecta Vite solo (Build: `npm run build`, Output: `dist`). Pulsa **Deploy**.
3. En el proyecto: **Settings → Domains → Add** `xirdal.com` (y `www.xirdal.com`).
   Vercel te muestra los registros DNS exactos; ponlos donde compraste el dominio
   (normalmente un registro A para `xirdal.com` y un CNAME para `www`).

Alternativa sin GitHub: en esta carpeta ejecuta `npx vercel --prod` y sigue las preguntas.

## Antes de publicar
- Confirma que el prefijo del WhatsApp (57 = Colombia) es el correcto.
- Cuando tengas la fecha del curso, escríbela en `banner.fecha` de `src/config.js`.
