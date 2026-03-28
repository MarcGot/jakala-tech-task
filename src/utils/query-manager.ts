export type SearchParams = { [key: string]: string | string[] | undefined };

export class QueryManager {
    static async parse(paramsPromise: Promise<SearchParams> | SearchParams) {
        try {
            const resolved = await paramsPromise;
            return resolved || {};
        } catch (error) {
            console.error("Error parsing searchParams:", error);
            return {};
        }
    }

    static createUrl(
        currentParams: URLSearchParams | string,
        updates: Record<string, string | null | undefined>
    ): string {
        const params = new URLSearchParams(currentParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value === null || value === undefined || value === "") {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        const queryString = params.toString();
        return queryString ? `?${queryString}` : "";
    }

    static getValue(params: SearchParams, key: string, defaultValue: string = ""): string {
        const value = params[key];
        if (Array.isArray(value)) return value[0] || defaultValue;
        return value || defaultValue;
    }
}
