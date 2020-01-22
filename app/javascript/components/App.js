import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
// Views
import Home from "../views/Home"
import About from "../views/About"
import Contact from "../views/Contact"

export default function App(props) {
    const [txt, setTxt] = useState("")
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>)
}