import { SectionHeading } from "../layout/SectionHeading";
import { ModuleCard } from "../features/ModuleCard";
import type { Module } from "../../data/platform";

interface ModuleGridProps {
  modules: Module[];
  onSelectModule: (id: string) => void;
}

export function ModuleGrid({ modules, onSelectModule }: ModuleGridProps) {
  return (
    <section className="mb-14">
      <SectionHeading
        eyebrow="Platform"
        title="Ana Modüller"
        subtitle="İş akışınızı katman katman yönetin"
        accentClassName="bg-gradient-to-b from-blue-500 to-violet-500"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} onSelect={onSelectModule} />
        ))}
      </div>
    </section>
  );
}
