import FlowerSkeleton from "@/components/features/FlowerCard/FlowerSkeleton";

export default function FlowersSkeletonGrid() {
    return (
        <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <FlowerSkeleton key={i} />
            ))}
        </section>
    );
}
