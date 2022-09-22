import { html, TemplateResult } from 'lit';
import '../src/media-elem.js';

export default {
  title: 'MediaElem',
  component: 'media-elem',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    img: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  description?: string;
  img?: string;
}

const Template: Story<ArgTypes> = ({
  title = 'Test Title',
  description = 'this is description',
  img = 'https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg',
}: ArgTypes) => html`
  <media-elem .title=${title} .description=${description} .img=${img}>
  </media-elem>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};
