'use client';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { aiTools } from '@/data/ai-tools-index';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            AI 编程工具
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            探索各类 AI 编程工具的模型成本和付费计划
          </p>
        </div>

        {/* 工具列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.id}`}>
              <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none hover:shadow-sm transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-black dark:text-zinc-50">
                      {tool.name}
                    </CardTitle>
                    <CardDescription className="text-zinc-600 dark:text-zinc-400">
                      {tool.type} 工具
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 grow">
                  <div className="space-y-3">
                    <div>
                      {tool.plans.map((plan, index) => (
                        <div key={index} className="mt-2">
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
