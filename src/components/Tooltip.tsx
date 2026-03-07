export default function Tooltip({ term, explanation }: { term: string; explanation: string }) {
  return (
    <span className="relative inline-block group/tooltip">
      <span
        tabIndex={0}
        role="button"
        aria-label={`${term}: ${explanation}`}
        className="text-gray-800 border-b-2 border-primary/40 cursor-help transition-colors group-hover/tooltip:border-primary focus:border-primary focus:outline-none"
      >
        {term}
      </span>
      <span role="tooltip" className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-white rounded-xl shadow-xl border border-stone-100 w-64 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible focus-within:opacity-100 focus-within:visible transition-all duration-300 transform group-hover/tooltip:-translate-y-0 translate-y-2 z-50 pointer-events-none">
        <span className="block text-primary text-xs font-semibold mb-1">{term}</span>
        <span className="block text-gray-600 text-xs leading-relaxed">{explanation}</span>
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
      </span>
    </span>
  );
}
