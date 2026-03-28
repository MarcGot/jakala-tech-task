import SearchBar from "@/components/functional/SearchBar/SearchBar";
import FlowersSection from "@/containers/home-page/flowers-section";
import {searchParams} from "@/types/search-params";
import {Suspense} from "react";
import FlowersSkeletonGrid from "@/containers/home-page/flowers-section/flowers-skeleton-grid";

export default async function HomePage({
   searchParams,
}: {
    searchParams: Promise<searchParams>;
}) {
    const params = await searchParams
    const search = params.search || '';

    console.log('search',search);

    return (
        <main className={"flex flex-col items-center gap-8 py-20 w-full"}>
            <SearchBar />
            <Suspense key={search} fallback={<FlowersSkeletonGrid />}>
                <FlowersSection search={search} />
            </Suspense>
        </main>
    );
}
