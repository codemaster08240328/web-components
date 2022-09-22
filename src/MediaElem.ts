import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MediaElem extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      max-width: 300px;
    }
    .content {
      text-align: center;
      padding: 8px;
    }
    img {
      width: 100%;
    }

    .media-item__wrapper {
      position: relative;
    }

    .media-item__wrapper:hover {
      cursor: pointer;
    }

    .media-item__description {
      position: absolute;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      display: none;
      top: 0px;
      background: white;
      padding: 10px;
      text-align: justify;
      overflow: auto;
    }
  `;

  /**
   * The title of media item.
   */
  @property({ type: String })
  title = 'Test Title';

  /**
   * The img source of media item cover image.
   */
  @property({ type: String })
  img =
    'https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg';

  /**
   * The description of media item.
   */
  @property({ type: String })
  description = 'World';

  render() {
    return this._renderTemplate();
  }

  private _renderTemplate() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <div
        class="media-item__wrapper"
        @mouseover=${this._hover}
        @mouseout=${this._mouseout}
      >
        <img src=${this.img} alt="media-asset" />
        <div class="content">
          <h2>${this.title}</h2>
        </div>
        <div id="media-item__description" class="media-item__description"></div>
      </div>
    `;
  }

  private _hover() {
    const descriptionElem = this.shadowRoot?.getElementById(
      'media-item__description'
    );
    if (descriptionElem) {
      descriptionElem.innerHTML = this.description;
      descriptionElem.style.display = 'block';
    }
  }

  private _mouseout() {
    const descriptionElem = this.shadowRoot?.getElementById(
      'media-item__description'
    );
    if (descriptionElem) {
      descriptionElem.style.display = 'none';
    }
  }
}
