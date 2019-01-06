import { render } from 'react-dom';
import config from './config';

const { routes } = config;

render(routes(), document.getElementById('root'));
