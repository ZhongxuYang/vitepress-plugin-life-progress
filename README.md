# vitepress-plugin-life-progress

> Date progress bar plugin for Vitepress

<div align="center">

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![types][types-src]][types-href]
[![License][license-src]][license-href]

</div>

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

View [CHANGELOG](./CHANGELOG.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/vitepress-plugin-life-progress/latest.svg?style=flat&colorA=18181B
[npm-version-href]: https://npmjs.com/package/vitepress-plugin-life-progress

[npm-downloads-src]: https://img.shields.io/npm/dm/vitepress-plugin-life-progress.svg?style=flat&colorA=18181B
[npm-downloads-href]: https://npmjs.com/package/vitepress-plugin-life-progress

[types-src]: https://img.shields.io/npm/types/vitepress-plugin-life-progress.svg?style=flat&colorA=18181B
[types-href]: https://npmjs.com/package/vitepress-plugin-life-progress

[license-src]: https://img.shields.io/npm/l/vitepress-plugin-life-progress.svg?style=flat&colorA=18181B
[license-href]: https://npmjs.com/package/vitepress-plugin-life-progress
