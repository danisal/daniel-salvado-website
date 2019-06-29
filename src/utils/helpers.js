/* eslint-disable import/prefer-default-export */
export function debounce(func, wait, immediate) {
    let timeout;
    return () => {
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export const encode = data => {
    return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join(`&`);
};
