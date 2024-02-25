> [!IMPORTANT]
> For **Svelte 3** and **Svelte 4** please use `@inqling/svelte-icons`. For **Svelte 5** and beyond, this package has been renamed to `@designthen/svelte-icons`.

# [Svelte Icons](https://www.npmjs.com/package/@designthen/svelte-icons)

Combines <a href="https://heroicons.com"><strong>Heroicons V2 &rarr;</strong></a> & <a href="https://simpleicons.org/"><strong>Simple Icons &rarr;</strong></a> as easy to use SVG components in your svelte project.

Checkout the <a href="https://github.com/DesignThen/svelte-icons/blob/main/CHANGELOG.md">changelog</a> to see what's new.

<p align="center">
  <img src="https://github.com/designthen/svelte-icons/blob/main/static/banner.png?raw=true" alt="Heroicons + Simple icons, The best icon library combined with brand icons ready for use in Svelte." width="830" height="212">
</p>

![npm](https://img.shields.io/npm/v/@designthen/svelte-icons?style=for-the-badge) ![NPM](https://img.shields.io/npm/l/@designthen/svelte-icons?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/@designthen/svelte-icons?style=for-the-badge) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/DesignThen/svelte-icons/main?style=for-the-badge)

---

## Why this package?

Copying SVG code into your project can become tedious and messy. With icons it can become particularly unnecessary as you probably don't need to edit the SVG markup. This library simply makes it easier to import each icon and have it scale based on it's inherited font-size.

This library adapts the following repositories for use in Svelte:

- Heroicons: [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)
- Simple Icons: [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)

## Usage

### Install

```bash
# npm
npm i @designthen/svelte-icons@latest

#yarn
yarn add @designthen/svelte-icons@latest

#pnpm
pnpm add @designthen/svelte-icons@latest
```

### Importing Icons

View an example in [/src/routes/+page.svelte](https://github.com/DesignThen/svelte-icons/blob/main/src/routes/%2Bpage.svelte)

Note that component names can't start with a number, so icons like `1Password` are prefixed with `I` and renamed to `I1Password`. You might ask why we don't rename icons like `1Password` to `OnePassword`? Well, that's because the original icon is called `1Password` and we want it to be easy to search for with intellisense.

```html
<script>
	// using default exports for single icons
	import StarSolid from '@designthen/svelte-icons/heroicon-24-solid/star-solid';

	// using named exports for multiple icons in a pack
	import { Github, I500px } from '@designthen/svelte-icons/simple-icons';
</script>
```

| Icon Pack         | Import Path                                    |
| ----------------- | ---------------------------------------------- |
| Heroicons solid   | `@designthen/svelte-icons/heroicon-24-solid`   |
| Heroicons outline | `@designthen/svelte-icons/heroicon-24-outline` |
| Heroicons small   | `@designthen/svelte-icons/heroicon-20-solid`   |
| Simple Icons      | `@designthen/svelte-icons/simple-icons`        |

From each pack you can import multiple icons from a pack at once, or import a single icon directly.

### Passed Props

Icons should behave as you expect most components.

```html
<script>
	// import 1 icon directly (recommended)
	import GitHub from '@designthen/svelte-icons/simple-icons/github.svelte';
	// import multiple icons from a pack
	import { Svelte, OnePassword } from '@designthen/svelte-icons/simple-icons';
</script>

<style>
	:global(.icon) {
		height: 24px;
	}

	section :global(svg) {
		fill: red;
	}
</style>

<OnePassword class="icon" style="width:24px;" />
<Svelte class="icon" style="width:24px;" />
<GitHub class="icon" style="width:24px;" />
```

## Contributing

### There are new icons that are missing from this package. How do I updating this package to include them?

1. Make sure you have dependencies installed with `pnpm install`.
2. Run `pnpm icon:update` to clone and import the latest SVG's from the following repositories:
   1. Heroicons: [@tailwindlabs: heroicons/src](https://github.com/tailwindlabs/heroicons/tree/master/src).
   2. Simple Icons: [@simple-icons: simple-icons/icons](https://github.com/simple-icons/simple-icons/tree/develop/icons).
3. You'll likely see that a few hundred files have changed. Run `pnpm format` to ensure consistent formatting. Now you'll see that only new or updated icon files have changed.

### How to I contribute my work?

1. Commit your changes
2. Run `npx changeset` to create a new changeset.
   1. Follow the instructions to create a changeset.
   2. Adding new icons is considered a `minor` version bump.
   3. Commit the changeset.
3. Open a pull request. Feel free to tag @OllieJT or @DesignThen.

### How do I add new icon packs aside from Heroicons and Simple Icons?

We're open to adding new icon packs.

A script should be written for each new pack added - this is fairly simple and is mostly copying and pasting from the existing scripts. In the future I will add more details about writing a "clone script".

1. Place all SVG icons in `/import` with one level of folder structure.
   - you should not nest svg's more than one level deep
   - only svg's are imported
   - svg code is not validated
   - svg attributes will be standardized
2. run `yarn import-svg` to convert all SVG files to svelte components.
3. Generated files can be found at `/src/lib/...`.

```
Example folder structure

import/
⮑ heroicons-solid/
   ⮑ icon1.svg
   ⮑ icon2.svg
   ⮑ ..
⮑ heroicons-outline/
   ⮑ icon1.svg
   ⮑ icon2.svg
   ⮑ ...
⮑ .gitkeep
README.md (you're here)
package.json
...
```

### How do I publish a new version to npm?

Above you'll see we answer `How to I contribute my work?`. Here we explain how to use changesets to trigger a new version to be prepared. Once a PR has been approved that contains a changeset, a new version will be build and deployed to npm via github actions.
