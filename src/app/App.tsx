import {Link} from 'react-router-dom';

import {useTheme} from 'app/providers/ThemeProvider';

import {classNames} from 'shared/libs';

import './styles/index.scss';
import {AppRouter} from './providers/router';

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter />
        </div>
    );
}
