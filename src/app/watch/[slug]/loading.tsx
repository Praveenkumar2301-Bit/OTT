import { Skeleton } from '@/components/ui/Skeleton';

export default function WatchLoading() {
  return (
    <div className="pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <div>
            <Skeleton className="aspect-video w-full rounded-xl" />
            <Skeleton className="h-8 w-2/3 mt-4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="aspect-video w-40 flex-shrink-0 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
