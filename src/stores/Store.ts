import { observable } from 'mobx';

export class Store {
    @observable timer: number = 0;

    resetTimer() {
        this.timer = 0;
    }

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }
}

