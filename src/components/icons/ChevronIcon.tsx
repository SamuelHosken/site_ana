export default function ChevronIcon({ className = "w-3.5 h-3.5", direction = "down" }: { className?: string; direction?: "down" | "right" | "left" }) {
  const paths: Record<string, string> = {
    down: "M19 9l-7 7-7-7",
    right: "M9 5l7 7-7 7",
    left: "M15 19l-7-7 7-7",
  };

  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={paths[direction]} />
    </svg>
  );
}
