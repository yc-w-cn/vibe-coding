/**
 * 安装指令：
 * pnpm install -D eslint @eslint/js @next/eslint-plugin-next @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort globals typescript-eslint
 */

import module from 'node:module';

import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// 获取 Node.js 内置模块，但排除 'constants'
const builtinModules = module.builtinModules.filter(
  (mod) => mod !== 'constants',
);

export default defineConfig(
  // TypeScript 严格类型检查配置
  tseslint.configs.strictTypeChecked,
  // TypeScript 样式检查配置
  tseslint.configs.stylisticTypeChecked,
  // TypeScript 推荐配置
  tseslint.configs.recommendedTypeChecked,
  // 禁用 ESLint 中与 Prettier 冲突的格式化规则
  prettierConfig,
  // 在 ESLint 中运行 Prettier 进行格式化检查
  eslintPluginPrettierRecommended,
  // Next.js 默认忽略规则
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    // 忽略指定目录
    ignores: ['src/services/**/api'],
    // 配置使用的插件
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      'react-hooks': reactHooks,
      react: reactPlugin,
      '@next/next': nextPlugin,
    },
    // 语言选项配置
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      // 全局变量配置
      globals: {
        React: 'writeable',
        ...globals.node,
      },
      // 解析器选项
      parserOptions: {
        projectService: {
          // 为了支持 projectService，需要把文件加入在这里
          allowDefaultProject: [
            '*.js',
            'eslint.config.mjs',
            'postcss.config.mjs',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // 规则配置
    rules: {
      // 使用 React 自动运行时配置
      ...reactPlugin.configs['jsx-runtime'].rules,
      // Next.js 推荐规则
      ...nextPlugin.configs.recommended.rules,
      // Next.js 核心 Web 性能规则
      ...nextPlugin.configs['core-web-vitals'].rules,
      // 关闭默认未定义变量检查（使用 TypeScript 类型检查替代）
      'no-undef': 'off',
      // 关闭默认未使用变量检查（使用 TypeScript 类型检查替代）
      'no-unused-vars': 'off',
      // Prettier 格式化警告
      'prettier/prettier': 'warn',
      // 允许使用 any 类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许建立空的类
      '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true }],
      // Promise 没有 then 或者 catch 只警告
      '@typescript-eslint/no-floating-promises': 'warn',
      // 关闭不安全成员访问检查
      '@typescript-eslint/no-unsafe-member-access': 'off',
      // 关闭不安全赋值检查
      '@typescript-eslint/no-unsafe-assignment': 'off',
      // 关闭不安全调用检查
      '@typescript-eslint/no-unsafe-call': 'off',
      // 关闭不安全返回检查
      '@typescript-eslint/no-unsafe-return': 'off',
      // 关闭不安全参数检查
      '@typescript-eslint/no-unsafe-argument': 'off',
      // 关闭未使用变量检查
      '@typescript-eslint/no-unused-vars': 'off',
      // 不自动转换 Interface 和 Type
      '@typescript-eslint/consistent-type-definitions': 'off',
      // 在同步过程里使用异步也是允许的
      '@typescript-eslint/no-misused-promises': 'warn',
      // 关闭不必要条件检查
      '@typescript-eslint/no-unnecessary-condition': 'off',
      // 允许使用双竖杠（||）代替空值合并运算符（??）
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // 允许在模板字符串中使用非字符串类型
      '@typescript-eslint/restrict-template-expressions': 'off',
      // 允许 Promise 没有 catch
      '@typescript-eslint/no-floating-promises': 'warn',
      // 允许 reject 未知的 error，仅警告
      '@typescript-eslint/prefer-promise-reject-errors': 'warn',
      // TypeScript 注释检查仅警告
      '@typescript-eslint/ban-ts-comment': 'warn',
      // 允许空对象类型
      '@typescript-eslint/no-empty-object-type': 'off',
      // 允许使用普通 for 循环而非 for...of
      '@typescript-eslint/prefer-for-of': 'off',
      // 允许未使用表达式
      '@typescript-eslint/no-unused-expressions': 'off',
      // 允许空函数
      '@typescript-eslint/no-empty-function': 'off',
      // 允许使用点表示法而非可选链
      '@typescript-eslint/prefer-optional-chain': 'off',
      // 导入排序规则配置
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 副作用导入
            ['^\\u0000'],
            // Node.js 内置模块
            ['^node:', `^(${builtinModules.join('|')})(/.*|$)`],
            // 框架
            [
              '^react\\u0000?$',
              '^next(/.*)?\\u0000?$',
              '^jotai\\u0000?$',
              '^@mui/',
            ],
            // 第三方包
            ['^@?\\w'],
            // 内部模块
            [
              '^(@/)?(minimals|lib|store|components|hooks|utils|types|constants|data)(/.*|$)',
            ],
            // 外部依赖
            ['^(@/)?(vendors)(/.*|$)'],
            // 绝对导入和其他导入
            ['^'],
            // 相对导入
            ['^\\.'],
          ],
        },
      ],
      // 导出排序规则
      'simple-import-sort/exports': 'error',
      // 导入必须在文件顶部
      'import/first': 'error',
      // 导入后必须有空行
      'import/newline-after-import': 'error',
      // 不允许重复导入
      'import/no-duplicates': 'error',
      // React Hooks 规则检查
      'react-hooks/rules-of-hooks': 'error',
      // React Hooks 依赖数组检查
      'react-hooks/exhaustive-deps': 'warn',
      // 不允许使用原生 img 元素（使用 Next.js Image 组件）
      '@next/next/no-img-element': 'error',
      // 允许使用 require 导入
      '@typescript-eslint/no-require-imports': 'off',
      // 关闭 Promise 错误使用警告
      '@typescript-eslint/no-misused-promises': 'off',
      // 关闭强制使用 await
      '@typescript-eslint/require-await': 'off',
    },
  },
  // JavaScript 文件的特殊配置
  {
    extends: [tseslint.configs.disableTypeChecked],
    rules: js.configs.recommended.rules,
    files: ['**/*.js'],
  },
);
