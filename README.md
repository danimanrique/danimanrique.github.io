# Portfolio de Daniela Manrique

Sitio personal desarrollado con Astro 5 y Tailwind CSS 4 para presentar el perfil profesional de Daniela Manrique como Full Stack Developer. La interfaz está inspirada en dashboards modernos, con foco en la conversación visual y la presentación clara de habilidades, experiencia y formas de contacto.

## Contenido destacado
- Navegación fija y secciones ancladas para un recorrido fluido.
- Hero con tarjeta interactiva de perfil que resalta datos clave y enlaces a redes.
- Estadísticas, servicios, habilidades y stack tecnológico organizados en bloques temáticos.
- Galería de proyectos con tarjetas estilizadas y CTA para ver el trabajo completo.
- Formulario de contacto con campos validados y datos directos.

## Tecnologías
- Astro 5.
- Tailwind CSS 4 mediante `@tailwindcss/vite` para utilidades modernas.
- CSS modular dedicado para los componentes principales.
- Recursos estáticos servidos desde `public/` y `src/assets/`.

## Requisitos previos
- Node.js 18.17+ o 20.x
- npm 9+

## Puesta en marcha local
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
   Por defecto, el sitio queda disponible en `http://localhost:4321`.

## Scripts disponibles
- `npm run dev`: inicia el servidor de desarrollo con recarga en caliente.
- `npm run build`: genera los archivos listos para producción en `dist/`.
- `npm run preview`: sirve el build final para validarlo antes de desplegar.
- `npm run astro <comando>`: acceso directo a utilidades de la CLI de Astro.

## Despliegue
1. Ejecutar `npm run build`.
2. Subir el contenido de `dist/` a tu proveedor (Netlify, Vercel, GitHub Pages, etc.).
3. Configurar el servidor para servir archivos estáticos y habilitar HTTPS.

## Créditos
Diseño y desarrollo: Daniela Manrique. Construido con ♥ aprovechando el ecosistema de Astro.
