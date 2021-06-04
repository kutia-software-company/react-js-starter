import qs, { ParseOptions } from 'query-string';
import { useRouter } from './useRouter';
const qsOptions: ParseOptions = {
    arrayFormat: 'comma',
};
type FilterValue = string | string[] | number | undefined;
export interface QueryParameters {
    /**
     * The current location pathname
     */
    path: string;
    /**
     * The current hash in the URL
     */
    hash: string | undefined;
    /**
     * Change the URL hash, or set to undefined to remove it from the URL.
     */
    setHash: (value: string | undefined) => void;
    /**
     * Set a query parameter value (without changing any of the other parameters)
     * Either a parameter,value pair or an object with (possibly) multiple parameters.
     */
    set(field: string, value: FilterValue): void;
    set(fields: { [field: string]: FilterValue }): void;
    /**
     * Set a query parameter value (without changing any of the other parameters)
     * Either a parameter, value pair or an object with (possibly) multiple parameters.
     * Returns a complete URL with querystring based on the query parameters.
     */
    getUrlWithQueryParams(field: string, value: FilterValue): string;
    getUrlWithQueryParams(fields: { [field: string]: FilterValue }): string;
    /**
     * Get a single string parameter from the URL, or undefined if it is not set.
     */
    get: (field: string) => string | undefined;
    /**
     * Get a string array value from the URL, or an empty array if it is not set.
     */
    getArray: (field: string) => string[];
    /**
     * Get a single number parameter from the URL, or undefined if it is not set.
     */
    getNumber: (field: string) => number | undefined;
}
const mergeValues = (
    originalValues: qs.ParsedQuery<string>,
    fields: string | { [field: string]: FilterValue },
    value?: FilterValue
) => {
    if (typeof fields === 'string') {
        return {
            ...originalValues,
            [fields]: typeof value === 'number' ? `${value}` : value,
        };
    } else {
        return {
            ...originalValues,
            ...fields,
        };
    }
};
export function useQueryParameters(): QueryParameters {
    const router = useRouter();
    const values = qs.parse(router.location.search, qsOptions);
    const hash =
        router.location.hash.length > 1 ? router.location.hash : undefined;
    const getUrlWithQueryParams = (
        fields: string | { [field: string]: FilterValue },
        value?: FilterValue
    ) => {
        const newValues = mergeValues(values, fields, value);
        const queryString = qs.stringify(newValues, qsOptions);
        const url = `${router.match.url}?${queryString}${hash || ''}`;
        return url;
    };
    const set: QueryParameters['set'] = (
        fields: string | { [field: string]: FilterValue },
        value?: FilterValue
    ) => {
        const url = getUrlWithQueryParams(fields, value);
        router.history.replace(url);
    };
    function get(name: string): string | undefined {
        const val = values[name];
        if (typeof val === 'string') {
            return val;
        } else if (Array.isArray(val) && val.length > 0) {
            return val[0];
        }
        return undefined;
    }
    function getArray(name: string): string[] {
        const val = values[name];
        if (Array.isArray(val)) {
            return val.filter((item) => !!item);
        } else if (val === undefined || val === null) {
            return [];
        } else {
            return [val];
        }
    }
    function getNumber(name: string) {
        const val = values[name];
        if (typeof val === 'string' && /^-?[0-9]+$/.test(val)) {
            return parseInt(val, 10);
        }
        return undefined;
    }
    function setHash(value: string | undefined) {
        const suffix = value ? `#${value}` : '';
        const url = `${router.match.url}${router.location.search}${suffix}`;
        router.history.replace(url);
    }
    return {
        path: router.location.pathname,
        hash,
        getNumber,
        get,
        getArray,
        getUrlWithQueryParams,
        set,
        setHash,
    };
}