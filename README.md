# AI 编程工具对比平台

一个用于对比和分析各类 AI 编程工具的 Web 应用，帮助开发者了解不同工具的模型成本、付费计划和功能特性。

## 项目特色

- **多版本支持**：区分国内版和国际版工具，支持不同定价策略
- **灵活筛选**：多选工具名称筛选器，支持对比分析
- **简洁界面**：黑白灰设计风格，信息展示清晰直观
- **实时数据**：基于真实定价和功能信息，保持数据准确性

## 支持的工具

### 国内版工具
- Code Buddy (国内版) - 腾讯云出品
- Qoder (国内版) - 阿里出品  
- Trae (国内版) - 字节跳动出品

### 国际版工具
- Code Buddy (国际版)
- Qoder (国际版)
- Trae (国际版)

### 其他工具
- GitHub Copilot
- Cursor

## 快速开始

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 启动开发服务器

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # 首页组件
│   └── layout.tsx      # 应用布局
├── components/         # UI 组件
│   └── ui/            # shadcn/ui 组件
├── data/              # 数据层
│   ├── ai-tools-index.ts  # 工具索引
│   └── tools/         # 工具数据文件
└── types/             # TypeScript 类型定义
```

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **包管理**: pnpm

## 功能特性

### 数据管理
- 支持国内版和国际版工具数据分离
- 统一的工具类型定义和接口
- 实时更新的定价和功能信息

### 用户界面
- 响应式网格布局
- 多选工具筛选器
- 统一高度的卡片设计
- 深色/浅色模式支持

### 交互体验
- 点击卡片查看工具详情
- 多选筛选支持灵活对比
- 简洁的导航和操作流程

## 开发指南

### 添加新工具

1. 在 `src/data/tools/` 目录下创建新的工具数据文件
2. 在 `src/data/ai-tools-index.ts` 中导入并添加到工具列表
3. 工具数据需要包含：名称、类型、模型、定价计划等信息

### 数据格式

```typescript
{
  id: 'tool-id',
  name: '工具名称',
  type: 'IDE',
  plans: [
    {
      name: '免费版',
      price: '¥0',
      features: ['功能1', '功能2']
    }
  ],
  source: '数据来源链接'
}
```

## 部署

### Vercel 部署

该项目可以轻松部署到 Vercel：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 配置构建命令：`pnpm build`
4. 部署完成

### 其他平台

也可以部署到其他支持 Node.js 的平台，如：
- Netlify
- Railway
- 自有服务器

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License