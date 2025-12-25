'use client';

import { Badge } from '@/components/ui/badge';

interface ToolFilterProps {
  allToolNames: string[];
  selectedTools: string[];
  onToggle: (toolName: string) => void;
  onClear: () => void;
}

export function ToolFilter({
  allToolNames,
  selectedTools,
  onToggle,
  onClear,
}: ToolFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <Badge
          variant={selectedTools.length === 0 ? 'default' : 'outline'}
          className="cursor-pointer hover:bg-zinc-900 dark:hover:bg-zinc-50"
          onClick={onClear}
        >
          全部工具
        </Badge>
        {allToolNames.map((toolName) => (
          <Badge
            key={toolName}
            variant={selectedTools.includes(toolName) ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-zinc-900 dark:hover:bg-zinc-50"
            onClick={() => {
              onToggle(toolName);
            }}
          >
            {toolName}
          </Badge>
        ))}
      </div>
    </div>
  );
}
