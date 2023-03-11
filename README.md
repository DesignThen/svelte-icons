# [Svelte Icons](https://www.npmjs.com/package/@inqling/svelte-icons) - Updated for Heroicons V2

Combines <a href="https://heroicons.com"><strong>Heroicons &rarr;</strong></a> & <a href="https://simpleicons.org/"><strong>Simple Icons &rarr;</strong></a> as easy to use SVG components in your svelte project.

<p align="center">
  <img src="https://github.com/inqling/svelte-icons/blob/main/static/banner.png?raw=true" alt="Heroicons + Simple icons, The best icon library combined with brand icons ready for use in Svelte." width="830" height="212">
</p>

![npm](https://img.shields.io/npm/v/@inqling/svelte-icons?style=for-the-badge) ![NPM](https://img.shields.io/npm/l/@inqling/svelte-icons?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/@inqling/svelte-icons?style=for-the-badge) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Inqling/svelte-icons/main?style=for-the-badge)

---

## Why this package?

Copying SVG code into your project can become tedious and messy. With icons it can become particularly unnecessary as you probably don't need to edit the SVG markup. This library simply makes it easier to import each icon and have it scale based on it's inherited font-size.

This library adapts the following repositories for use in Svelte:

-   Heroicons: [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)
-   Simple Icons: [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)

## Usage

### Install

```bash
# npm
npm i @inqling/svelte-icons@latest
```

```bash
#yarn
yarn add @inqling/svelte-icons@latest
```

### Importing Icons

View an example in [/src/routes/+page.svelte](https://github.com/Inqling/svelte-icons/blob/main/src/routes/%2Bpage.svelte)

#### Import from the package

Note that component names can't start with a number, so icons like `1Password` are renamed to `I1Password`.

> **Note**
> You might ask why we don't rename icons like `1Password` to `OnePassword`? Well, that's because the original icon is called `1Password` and we want it to be easy to search for with intellisense.

```html
<script>
	import { StarSolid } from "@inqling/svelte-icons/heroicon-24-solid";
	import { PlusCircleOutline } from "@inqling/svelte-icons/heroicon-24-outline";
	import { Github, I500px } from "@inqling/svelte-icons/simple-icons";
</script>
```

| Icon Pack         | Import Path                                 |
| ----------------- | ------------------------------------------- |
| Heroicons solid   | `@inqling/svelte-icons/heroicon-24-solid`   |
| Heroicons outline | `@inqling/svelte-icons/heroicon-24-outline` |
| Heroicons small   | `@inqling/svelte-icons/heroicon-20-solid`   |
| Simple Icons      | `@inqling/svelte-icons/simple-icons`        |

From each pack you can import multiple icons from a pack at once, or import a single icon directly.

### Passed Props

Icons should behave as you expect

```html
<script>
	// import 1 icon directly (recommended)
	import GitHub from "@inqling/svelte-icons/simple-icons/github.svelte";
	// import multiple icons from a pack
	import { Svelte, OnePassword } from "@inqling/svelte-icons/simple-icons";
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

## License

This library is MIT licensed.

## Updating and adding to this package

### Updating existing icons

1. Make sure you have dependencies installed with `pnpm install`.
2. Run `pnpm clone` to clone and import the latest SVG's
    1. Heroicons: [@tailwindlabs: heroicons/src](https://github.com/tailwindlabs/heroicons/tree/master/src).
    2. Simple Icons: [@simple-icons: simple-icons/icons](https://github.com/simple-icons/simple-icons/tree/develop/icons).
3. Run `pnpm icon:import`

Alternatively you can run `pnpm icon:update`, which will run the clone then import script.

### Adding new icons

A script should be written for each new pack added - this is fairly simple and is mostly copying and pasting from the existing scripts. In the future I will add more details about writing a "clone script".

1. Place all SVG icons in `/import` with one level of folder structure.
    - you should not nest svg's more than one level deep
    - only svg's are imported
    - svg code is not validated
    - svg attributes will be standardized
2. run `yarn import-svg` to convert all SVG files to svelte components.
3. Generated files can be found at `/src/lib/...`.

##### Example folder structure

```
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

### Publishing to NPM

Once you have updated the icons (`pnpm icon:update`) you can bump the version number `x.+1.0`. Commit your changes to PR. Github workflows will handle publishing to npm once the PR is merged in to main.
