import React from "react"
import { Switch, Route } from "react-router-dom"
import { Trending } from "./pages/Trending/Trending"
import { Movies } from "./pages/Movies/Movies"
import { Series } from "./pages/Series/Series"
import { Search } from "./pages/Search/Search"


export const useRoutes = () => {
        return (
            <Switch>
                <Route path="/" component={Trending} exact/>
                <Route path="/movies" component={Movies} />
                <Route path="/series" component={Series} />
                <Route path="/search" component={Search} />
            </Switch>
        )
}