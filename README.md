# React-Native

### 代码规范

- eslint
- prettier
- pretty-quick

扩展链接

[Add ESLint & Prettier to VS Code](https://www.youtube.com/watch?v=bfyI9yl3qfE)

[eslint-config-react-app](https://www.npmjs.com/package/@axio/eslint-config-react-app)

### 项目规范

- git-flow

扩展链接

[git-flow 的工作流程](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)

### 调试工具

- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)

- 【brew 安装】

  `brew update && brew cask install react-native-debugger`

- [直接下载](https://github.com/jhen0409/react-native-debugger/releases)

### Android 上默认不支持 GIF 和 WebP

```$xslt
dependencies {
  // If your app supports Android versions before Ice Cream Sandwich (API level 14)
  compile 'com.facebook.fresco:animated-base-support:1.10.0'

  // For animated GIF support
  compile 'com.facebook.fresco:animated-gif:1.10.0'

  // For WebP support, including animated WebP
  compile 'com.facebook.fresco:animated-webp:1.10.0'
  compile 'com.facebook.fresco:webpsupport:1.10.0'

  // For WebP support, without animations
  compile 'com.facebook.fresco:webpsupport:1.10.0'
}
```

### iOS webp 图片支持

`yarn add TGPSKI/react-native-webp-support`

另外注意 WebP.framework、WebPDemux.framework 添加 Framework Search Paths

### 添加 Decorators 支持

- babel >= 7.0

`@babel/plugin-proposal-decorators`

.babelrc 添加

`"plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]`

`yarn add -D babel-plugin-transform-decorators-legacy`

- 其他

.babelrc 添加

`"plugins": ["transform-decorators-legacy"]`

### 添加自定义 icon

- iOS

.ttf 文件拷贝进入工程

Info.plist Fonts provided by application 添加对应的 .ttf 文件名称

- Android

.ttf 文件拷贝到 assets/fonts 目录下

- js

借助 react-native-vector-icons 方法 createIconSet

```$xslt
import { createIconSet } from 'react-native-vector-icons';

const glyphMap = {
  play: 58932,
  error_image: 58939,
  yes: 58938,
};

const iconSet = createIconSet(glyphMap, 'IconFont', 'iconfont.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
```

### 添加 Redux + Rematch + Test
