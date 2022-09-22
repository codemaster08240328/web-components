# \<media-elem>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
> This doesn't work for now. Need to push package into npm repository first.
```bash
npm i web-components
```

## Linking for Local development
```bash
$ npm link
```

Then, go to target repository

```bash
$ npm link web-components
```

## Usage

```html
<script type="module">
  import 'web-components/media-elem.js';
</script>

<media-elem></media-elem>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Local contribution.
1. Update `media-elem` or add more web components inside `src`. 
2. Add your components into `storybook`.
3. Build package first before pushing or linking for usage.
```bash
$ npm run build
```


## What can be improved more
1. More automation test case for high coverage score

2. Push into npm repository for client usage. 