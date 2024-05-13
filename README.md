# hanzi-radical-stroke-counts 

## 简介

本npm包提供了一个简单而直接的函数，用于查询汉字的部首及笔画信息。数据爬取自汉典（[ZDIC](https://www.zdic.net/)），确保了信息的准确性和可靠性。通过本包，您可以轻松地集成汉字部首查询功能到您的应用中，特别适用于教育软件、文字处理工具或任何需要深入处理汉字信息的项目。

## 安装

使用npm安装此包：

```bash
npm install @vearvip/hanzi-radical-stroke-counts
```

或使用yarn安装：

```bash
yarn add @vearvip/hanzi-radical-stroke-counts
```

## 使用方法

导入`queryRadicalStrokeCount`函数，并传入您想查询的汉字作为参数，函数将返回一个数组，其中包含汉字的部首和总笔画数。

```javascript
import { queryRadicalStrokeCount } from '@vearvip/hanzi-radical-stroke-counts';

const hanzi = '额';
const result = queryRadicalStrokeCount(hanzi);
console.log(result); // 输出：[ "页", 15 ]

// 解释：汉字"额"的部首是"页"，总笔画数为15。
```

## 特性

- **精准查询**：直接根据汉字获取其部首及笔画数。
- **数据可靠**：数据源自汉典(ZDIC)，保证信息权威性。
- **易于集成**：单一函数接口，快速融入现有项目。



## 注意事项
- 本包采用esm，请确保运行环境支持es module。
- 本包仅支持查询汉字的部首及总笔画数，不包含其他诸如读音、释义等信息。
- 请确保查询的汉字存在于数据源中，未收录的罕见或特殊汉字可能无法返回结果。
- 如需查询汉字读音信息，请使用[@vearvip/hanzi-readings](https://github.com/vearvip/hanzi-readings)这个npm包。
  
## 贡献

如有任何问题或建议，请在GitHub上提交issue，我们会尽快响应。希望本包能为您的项目带来便利！

## 许可证

此项目遵循MIT许可证发布。更多详情请查看[LICENSE](LICENSE)文件。