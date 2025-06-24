# Vue‑Aero

[![npm](https://img.shields.io/npm/v/@miguexyz/vue-aero?color=%23cb3837\&label=npm)](https://www.npmjs.com/package/@miguexyz/vue-aero)
[![license](https://img.shields.io/github/license/MigueXYZ/vue-aero-library)](LICENSE)

A small showcase of **Dark‑Aero** UI components—Button, Balloon/Tooltip, Table, Sidebar, Checkbox, CodeBlock and more—built with **Vue 3** + **Vite** and styled with a subtle glassmorphism theme.

**Live docs / playground:** [https://vue-aero-library.netlify.app/](https://vue-aero-library.netlify.app/)

---

## ✨ Features

* Zero‑config tree‑shakable **ES** & **UMD** bundles
* Global plugin *or* on‑demand component imports
* Ships with ready‑made CSS theme (`dist/vue‑aero.css`)

---

## 🚀 Install

```bash
# npm
npm install @miguexyz/vue-aero

#other package managers might work, not tested
```

> **Peer deps:** Your project must already have **vue ^3.3+** (and optionally **vue-router ^4** if you use the docs example).

---

## 🔧 Usage

### 1) Register the whole library

```js
// main.js / main.ts
import { createApp } from 'vue'
import App from './App.vue'

import VueAero from '@miguexyz/vue-aero'
import '@miguexyz/vue-aero/style'     // injects dist/vue-aero.css

createApp(App)
  .use(VueAero)
  .mount('#app')
```

All components will then be globally available (e.g. `<DarkAeroButton />`).

---

### 2) Import individual components (tree‑shaking)

```vue
<script setup>
import { DarkAeroButton, DarkAeroBalloon } from '@miguexyz/vue-aero'
</script>

<template>
  <DarkAeroButton>Click me</DarkAeroButton>
  <DarkAeroBalloon position="bottom-right">I\'m a tooltip</DarkAeroBalloon>
</template>
```

If you use on‑demand imports, make sure to add the CSS somewhere in your app (once):

```js
import '@miguexyz/vue-aero/style'      // or 'dist/vue-aero.css'
```

---

### Optional fonts

Components like **Balloon** expect `Source Code Pro`. Add it to your HTML or bundle:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap">
```

---

## 🛠️ Local development / contributions

```bash
# clone
git clone https://github.com/MigueXYZ/vue-aero-library.git
cd vue-aero-library

# install
npm install

# run docs playground (http://localhost:5173)
npm run dev

# build library bundle\ nnpm run build
```

Pull requests & issues are welcome!

---

## 📜 License

GPL‑3.0‑only
