import { HeroSkeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="pt-16">
      <HeroSkeleton />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="h-6 w-48 bg-zentra-card rounded animate-pulse mb-6" />
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-shrink-0 w-[280px]">
              <div className="aspect-video bg-zentra-card rounded-lg animate-pulse" />
              <div className="h-4 w-3/4 mt-2 bg-zentra-card rounded animate-pulse" />
              <div className="h-3 w-1/2 mt-1 bg-zentra-card rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
