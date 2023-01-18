import { Slide } from "../../shared/types/Slide";

class SlidesController {
    target: HTMLElement | undefined;
    slides: Slide[] | [];

    constructor(parent: HTMLElement) {
        this.target = parent;
     
        console.log(this.slides);
    }
}

export default SlidesController;