import App from './App';
import 'normalize.css';
import { render } from 'lit-html';
import Glide from '@glidejs/glide';

window.onload = () => render(App, document.getElementById('app'));
