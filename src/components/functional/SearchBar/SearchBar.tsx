'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import {QueryManager} from "@/utils/query-manager";

function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isPending, startTransition] = useTransition();

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
                defaultValue={searchParams.get('search')?.toString()}
                className="w-full pl-10 pr-4 py-2 rounded-md outline-none border-neutral-grey border bg-white"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
                {isPending ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                    <Search className="h-5 w-5" />
                )}
            </div>
        </div>
    );
}

export default SearchBar;
