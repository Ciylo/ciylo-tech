export default function BlogHero() {
  return (
    <div className="relative py-12 md:py-20">
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
          <span className="text-xs font-bold text-black">Insights & Updates</span>
          <div className="w-7 h-[2px] rounded-full bg-[#00C9A7]" />
        </div>
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold text-[#00C9A7] leading-none">
          Our Blog
        </h1>
        <p className="text-sm md:text-lg text-[#374151] max-w-2xl leading-relaxed">
          Thoughts on software engineering, design systems, and building
          products that scale.
        </p>
      </div>
    </div>
  );
}
