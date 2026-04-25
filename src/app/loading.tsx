export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="h-8 w-64 animate-pulse rounded-md bg-muted" />
      <div className="mt-4 h-4 w-48 animate-pulse rounded-md bg-muted/60" />
      <div className="mt-8 grid w-full max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-6">
            <div className="h-40 animate-pulse rounded-md bg-muted" />
            <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-muted" />
            <div className="mt-2 h-3 w-full animate-pulse rounded bg-muted/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
