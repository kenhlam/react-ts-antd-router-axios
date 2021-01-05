
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '@/pages/home'
import { NewsList, NewsDetail } from '@/pages/news'
import FindExpert from '@/pages/findExpert'
import Login from '@/pages/login'

import Releace from '@/pages/release'
const MainRouter: React.FC = () => {
    return (

        <Switch>
            <Route
                path="/"
                exact={true}
                component={Home}
            />
            <Route
                path='/news'
                exact={true}
                component={NewsList}
            />
            <Route
                path='/news/:id'
                exact={true}
                component={NewsDetail}
            />
             <Route
                    path='/release'

                    component={Releace}
                />
            <Route
                path='/findExpert'
                exact={true}
                component={FindExpert}
            />
            <Route
                path='/login'
                exact={true}
                component={Login}
            />
             <Route
                    path='*'

                    component={Home}
                />
        </Switch>

    )
}
export default MainRouter

