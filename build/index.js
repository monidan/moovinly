const getParentEl = (parentEl) => typeof parentEl === 'string'
    ? document.querySelector(parentEl)
    : parentEl;

class SlidesController {
    constructor(parent) {
        this.target = parent;
        console.log(this.slides);
    }
}

class Moovinly {
    constructor(parentEl, params) {
        this.slidesController = new SlidesController(getParentEl(parentEl));
        console.log('Test moovinly');
    }
}

export { Moovinly as default };
