import * as ReactDOM from "react-dom";
import * as React from "react";
import {App} from "./App";

ReactDOM.render(<App />, document.querySelector("#app"));

const m: any = module;

if (m.hot) {
    console.log("45673");

    m.hot.accept(["./app/App.tsx"], function(dep) {
        const {App} = require("./App");
        console.log(App.id);
        ReactDOM.unmountComponentAtNode(document.querySelector("#app"));
        ReactDOM.render(<App />, document.querySelector("#app"));
    });
}
