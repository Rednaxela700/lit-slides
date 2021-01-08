import { html } from 'lit-html';
import logo from './assets/logo.svg';
import Carousel from './Carousel';

const Header = html`<header class="header">
  <div class="header__wrapper">
    <div class="header__logo">
      <img src="${logo}" class="logo" />
    </div>
  </div>
</header>`;

const pageSection = (
  sectionName,
  nestedComponent = '',
) => html` <section class="${sectionName}">
  <div class="${sectionName}__wrapper">
    <h1 class="${sectionName}__title">Heading</h1>
    <p class="${sectionName}__subtitle">
      Lorem ipsum dolor sit amet, consect etur adipiscing elit.
    </p>
    ${nestedComponent}
  </div>
</section>`;

const App = html`
  ${Header}
  <main>
    ${pageSection('hero', Carousel)}${pageSection('overview')}
  </main>
`;
export default App;
