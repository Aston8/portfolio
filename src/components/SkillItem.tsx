import { AnyCaaRecord } from "node:dns";

export default function SkillItem({ name, icon }:any) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-800/50">
        <div className="text-zinc-300">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-zinc-400">
        {name}
      </p>
    </div>
  );
}