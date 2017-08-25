/**
 * Debounce calling of the given function for the sepcified time in milliseconds.
 * Returns a function that will perform the debouncing.
 * Any parameters supplied to the returned function will be passed on to the debounced function.
 * But only the parameters from the final call will be passed on.
 *
 * @param {function} func Function to debounce
 * @param {number} time Time in mS to wait before calling debounced function
 * @return {function}
 */
const debounce = (func, time) => {
    let timer;
    return (...params) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = undefined;
            func(...params);
        }, time);
    };
};

export default debounce;
