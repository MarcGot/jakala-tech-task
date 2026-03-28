export default function FlowerSkeleton() {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-1" />
            <div className="h-5 bg-gray-200 rounded w-1/2" />
            <div className="w-full h-full bg-gray-200 rounded-md mb-4 aspect-3/2" />
        </div>
    );
}
