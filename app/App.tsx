import * as React from "react";
import * as styles from "./App.scss";
import {Counter} from "./Counter";

export class App extends React.Component {
    static id = 52;

    constructor(props) {
        super(props);

        console.log("App.ctor " + App.id);
    }

    render() {
        return <div className="App">
            <h1>Hello React {App.id}</h1>

            <Counter/>
        </div>
    }
}

