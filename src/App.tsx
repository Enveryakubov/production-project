import {Route, Routes} from 'react-router-dom';

import {Link} from 'react-router-dom';
import {AboutPageAsync} from './pages/AboutPage/AboutPageAsync';
import {Suspense} from 'react';
import {MainPageAsync} from './pages/MainPage/MainPageAsync';

import './styles/index.scss';

import useTheme from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>
                    <Route path='/' Component={MainPageAsync} />
                    <Route path='/about' Component={AboutPageAsync} />
                </Routes>
            </Suspense>
        </div>
    );
}
