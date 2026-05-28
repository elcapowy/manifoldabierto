# 🚀 Cómo subir Manifold Abierto a GitHub + Vercel

---

## PASO 1 — Preparar el ZIP

Descomprimí el archivo ZIP descargado. Vas a ver esta estructura:
```
📁 manifold-abierto/
  ├── index.html          ← archivo principal
  ├── components.jsx
  ├── home-page.jsx
  ├── pages.jsx
  ├── tweaks-panel.jsx
  └── 📁 assets/
      ├── logo.png
      ├── hero-bg.mp4
      ├── trailer.mp4
      └── 📁 sponsors/
          └── (logos de sponsors)
```

---

## PASO 2 — Subir a GitHub

### Opción A: Reemplazar repo existente (si ya tenés uno)

1. Entrá a tu repo en GitHub (ej: `github.com/elcapowy/manifoldabierto`)
2. Si ya tenés archivos viejos, borrá todo:
   - Seleccioná los archivos → `Delete file` → Commit
3. Click en **"Add file" → "Upload files"**
4. **Arrastrá TODA la carpeta descomprimida** (o seleccioná todos los archivos)
5. En el campo de commit escribí: `Manifold Abierto v2 - portal completo`
6. Click **"Commit changes"** ✅

### Opción B: Repo nuevo desde cero

1. Entrá a [github.com/new](https://github.com/new)
2. Nombre del repo: `manifoldabierto`
3. Dejalo **Public**
4. Click **"Create repository"**
5. Click **"uploading an existing file"**
6. Arrastrá todos los archivos del ZIP
7. Commit → **"Commit changes"** ✅

---

## PASO 3 — Configurar Vercel

1. Entrá a [vercel.com](https://vercel.com) con tu cuenta
2. Click **"Add New Project"**
3. Seleccioná tu repo de GitHub (`manifoldabierto`)
4. En la configuración del proyecto:
   - **Framework Preset:** `Other` (no Next.js, no Vite)
   - **Root Directory:** dejalo **vacío** (o `./`)
   - **Build Command:** dejalo **vacío**
   - **Output Directory:** dejalo **vacío**
5. Click **"Deploy"** 🚀

---

## PASO 4 — Dominio personalizado (opcional)

1. En Vercel → tu proyecto → **"Settings" → "Domains"**
2. Agregá tu dominio: `manifoldabierto.com`
3. Seguí las instrucciones para apuntar los DNS

---

## ⚠️ Importante

- El archivo principal **debe llamarse `index.html`** (ya está incluido en el ZIP)
- Si Vercel da error de "Root Directory not found": ir a **Settings → General → Root Directory** y dejarlo **vacío**
- Los videos (`hero-bg.mp4`, `trailer.mp4`) son pesados — si Vercel los corta, se pueden hostear en YouTube/Vimeo y embedear

---

## ✅ Checklist final

- [ ] ZIP descomprimido
- [ ] Archivos subidos a GitHub
- [ ] Vercel conectado al repo
- [ ] Framework: Other, Root Directory: vacío
- [ ] Deploy exitoso
- [ ] Dominio configurado (opcional)
