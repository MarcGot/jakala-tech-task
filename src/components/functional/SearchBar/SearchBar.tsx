"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Loader2, Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { QueryManager } from "@/utils/query-manager";

function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isPending] = useTransition();

    const handleSearch = useDebouncedCallback((term: string) => {
        const newQuery = QueryManager.createUrl(searchParams, { search: term });
        replace(`${pathname}${newQuery}`);
    }, 300);

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Busca en nuestra tienda"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("search")?.toString()}
                className="border-neutral-grey w-full rounded-md border bg-white py-2 pr-4 pl-10 outline-none"
            />
            <div className="absolute top-2.5 left-3 text-gray-400">
                {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
            </div>
        </div>
    );
}

export default SearchBar;
