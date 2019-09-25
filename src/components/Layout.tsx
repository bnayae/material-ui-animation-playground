import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

const Home = lazy(() => import('./Home'));

export interface ILayoutProps {
}


export default function Layout(props: ILayoutProps) {

    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />

                {/* <Route path="/users/:id" component={User} /> */}
            </Switch>
        </Suspense>
    );
}
