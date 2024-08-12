// Debounce utility function
export const debounce = (func: (...args: unknown[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>; // Use ReturnType to infer type

    return (...args: unknown[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};
