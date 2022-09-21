import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MediaElem extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      max-width: 300px;
    }
    .content {
      text-align: center;
      padding: 8px;
    }
    img {
      width: 100%;
    }
  `;

  /**
   * The title of media item.
   */
  @property({type: String})
  title = 'Test Title';

  /**
   * The img source of media item cover image.
   */
  @property({type: String})
  img = 'https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg';
  
  /**
   * The description of media item.
   */
  @property({type: String})
  description = 'World';

  render() {
    return this._renderTemplate()
  }

  private _renderTemplate() {
    return html`
      <img src=${this.img} alt="media-asset" />
      <div class="content">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
      </div>
    `; 
  }
}
