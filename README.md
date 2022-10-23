# vitepress-plugin-life-progress

> Date progress bar plugin for vitepress

<p align="center">
  <img src="https://img.shields.io/npm/dm/vitepress-plugin-life-progress.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vitepress-plugin-life-progress"><img src="https://img.shields.io/npm/v/vitepress-plugin-life-progress.svg" alt="Version"></a>
  <a href="https://github.com/vuejs/vitepress-plugin-life-progress/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vitepress-plugin-life-progress.svg" alt="License"></a>
</p>

## Demo
<img src="./docs/static/record.gif" />

## Install
```sh
yarn add -D vitepress-plugin-life-progress
# OR npm install -D vitepress-plugin-life-progress
```

## Usage
```ts
// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme"
import vitepressLifeProgress from 'vitepress-plugin-life-progress'
import 'vitepress-plugin-life-progress/lib/css/index.css'

export default {
  ...DefaultTheme,
  setup () {
    vitepressLifeProgress()
  },
}
```

Then you can use `vitepress-plugin-life-progress` ! 🎉
