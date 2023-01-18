type Params = {
    grabCursor: Boolean;
    slidesPerView: 'auto' | Number;
}

type Breakpoint = {
    minWidth: Number;
    params: Params;
}

export type passedParams =  Params & {
    breakpoints: Breakpoint[];
}