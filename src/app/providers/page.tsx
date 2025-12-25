'use client';

import AppFooter from '@/components/AppFooter';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const vendors = [
  { id: 'siliconflow', name: '硅基流动', note: '国内模型服务商' },
];

export default function Providers() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            底层模型供应商
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            支持 CLI 替换的国内模型服务商
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-black dark:text-zinc-50">
                  {vendor.name}
                </CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {vendor.note}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
