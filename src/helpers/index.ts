export const timer = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const addCommaToNumbers: (number: number | string | undefined) => string | undefined = (number) => number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
