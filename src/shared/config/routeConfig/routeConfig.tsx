import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';

import {RouteProps} from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        Component: MainPage
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        Component: AboutPage
    }
};
