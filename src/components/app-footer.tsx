/**
 * 全局页脚组件：显示版本号与构建日期（编译期注入）
 * 说明：值来源于 next.config.ts 的 env（NEXT_PUBLIC_APP_VERSION / NEXT_PUBLIC_BUILD_DATE）
 */
export default function AppFooter() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? '未知版本';
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE ?? '未知日期';
  return (
    <footer className="mt-auto w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          Version {version} @ {buildDate}
        </p>
      </div>
    </footer>
  );
}
