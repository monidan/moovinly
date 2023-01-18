export const getParentEl = (parentEl: HTMLElement | string): HTMLElement | undefined => 
    typeof parentEl === 'string'
        ? document.querySelector(parentEl)
        : parentEl;