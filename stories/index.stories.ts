import { html, TemplateResult } from 'lit';
import '../src/media-elem.js';

export default {
  title: 'MediaElem',
  component: 'media-elem',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
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
}

const Template: Story<ArgTypes> = ({
  title = 'Test Title',
  description = 'this is description',
}: ArgTypes) => html`
  <media-elem
    .title=${title}
    .description=${description}
  >
  </media-elem>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};
