import * as React from "react";
import {appStore} from "./appStore";
import styles from "./Counter.scss";

console.log("styles", styles);

interface CounterState {
    counter: number;
}

export class Counter extends React.Component<{}, CounterState> {
    static id = 55;

    constructor(props) {
        super(props);

        console.log("Counter.ctor");

        this.state = {
            counter: 0,
        };
    }

    render() {
        const {counter} = appStore;

        return <div className="Counter">
            <button onClick={this.dec} className={styles.btn}>Dec</button>
            <span>{counter}</span>
            <button onClick={this.inc}>Inc</button>
        </div>
    }

    inc = () => {
        const {counter} = appStore;

        appStore.counter++;

        this.forceUpdate();
    }

    dec = () => {
        const {counter} = this.state;

        appStore.counter--;

        this.forceUpdate();
    }
}
