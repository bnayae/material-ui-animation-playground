import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';
const TransitionSample = lazy(() => import('./TransitionSample'));
const TransitionMoreSample = lazy(() => import('./TransitionMoreSample'));
const Material = lazy(() => import('./Material'));

export interface ILayoutProps {
}


export default function Layout(props: ILayoutProps) {

    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/material" component={Material} />
                <Route exact path="/trans" component={TransitionSample} />
                <Route exact path="/trans-more" component={TransitionMoreSample} />
                <Route component={TransitionMoreSample} />
            </Switch>
        </Suspense>
    );
}
