import FlowerSkeleton from "@/components/features/FlowerCard/FlowerSkeleton";

export default function FlowersSkeletonGrid() {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
                <FlowerSkeleton key={i} />
            ))}
        </section>
    );
}
