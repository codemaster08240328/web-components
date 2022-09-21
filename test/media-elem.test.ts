import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MediaElem } from '../src/MediaElem.js';
import '../src/media-elem.js';

describe('MediaElem', () => {
  it('has a default title "Test Title"', async () => {
    const el = await fixture<MediaElem>(html`<media-elem></media-elem>`);

    expect(el.title).to.equal('Test Title');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MediaElem>(html`<media-elem title="attribute title"></media-elem>`);

    expect(el.title).to.equal('attribute title');
  });
});
