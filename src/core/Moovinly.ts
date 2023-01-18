import { passedParams } from "../shared/types/Params";
import { getParentEl } from "../shared/utils/getParentEl";

import SlidesController from "./classes/SlidesController";

class Moovinly {
    slidesController: SlidesController;

    constructor(parentEl: HTMLElement | string, params: passedParams) {
        this.slidesController = new SlidesController(getParentEl(parentEl));
        console.log('Test moovinly');
    }
}

export default Moovinly;