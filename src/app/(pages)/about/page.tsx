export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">
          About this starter
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          All shared UI lives in <code>src/components</code>, while page routes
          live under <code>src/app/(pages)</code>. Add more folders inside the
          route group to create new pages.
        </p>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white p-6 text-sm leading-6 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Add new pages inside <code>src/app/(pages)/&lt;route&gt;/page.tsx</code>.
          </li>
          <li>
            Keep shared UI in <code>src/components</code> and import where needed.
          </li>
          <li>Use <code>layout.tsx</code> inside a folder to scope a layout.</li>
        </ul>
      </div>
    </div>
  );
}

