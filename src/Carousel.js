import { html } from 'lit-html';
import Glide from '@glidejs/glide';

const Carousel = html`<div>
  <h3>This is a Carousel</h3>
  <div class="carousel">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__arrows" data-glide-el="controls">
          <button
            class="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            class="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
        <ul class="glide__slides">
          <li class="glide__slide">0</li>
          <li class="glide__slide">1</li>
          <li class="glide__slide">2</li>
        </ul>
      </div>
    </div>
  </div>
</div>`;

export default Carousel;
