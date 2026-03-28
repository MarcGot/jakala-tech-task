export default function FlowerSkeleton() {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
            <div className="mb-1 h-8 w-3/4 rounded bg-gray-200" />
            <div className="h-5 w-1/2 rounded bg-gray-200" />
            <div className="mb-4 aspect-3/2 h-full w-full rounded-md bg-gray-200" />
        </div>
    );
}
