export default function Loading() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      <section className="mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-200 border-t-red-600 dark:border-slate-800 dark:border-t-red-500" />
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
          Loading UA Communications
        </p>
      </section>
    </main>
  );
}
