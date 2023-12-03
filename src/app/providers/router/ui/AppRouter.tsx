import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {RouteConfig} from 'shared/config/routeConfig/routeConfig';

export default function AppRouter() {
    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
                {Object.values(RouteConfig).map(props => (
                    <Route key={props.path} {...props} />
                ))}
            </Routes>
        </Suspense>
    );
}
