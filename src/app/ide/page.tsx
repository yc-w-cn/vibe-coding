'use client';

import AppFooter from '@/components/AppFooter';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { aiTools } from '@/data';

export default function IDE() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            IDE 级别的 vibe-coding
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            列出常见 IDE 工具及其付费计划
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <Card
              key={tool.id}
              className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none h-full"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-black dark:text-zinc-50">
                  {tool.name}
                </CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {tool.type} 工具
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                {tool.plans.map((plan, index) => (
                  <div key={index} className="mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {plan.name}
                      </span>
                      <span className="text-sm font-semibold text-black dark:text-zinc-50">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="mt-1 space-y-1">
                      {plan.features.map((feature, idx) =>
                        feature ? (
                          <li
                            key={idx}
                            className="text-xs text-zinc-600 dark:text-zinc-400"
                          >
                            • {feature}
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
