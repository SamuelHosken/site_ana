import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: ReactNode;
  centered?: boolean;
}

export default function SectionHeader({ badge, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={`group ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-primary text-xs font-medium tracking-widest uppercase mb-3">
          {badge}
        </span>
      )}

      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 tracking-tight mb-2">
        {title}
      </h2>

      <div className={`h-[2px] w-20 bg-primary/20 rounded-full overflow-hidden ${centered ? "mx-auto" : ""}`}>
        <div className="h-full w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
      </div>
    </div>
  );
}
