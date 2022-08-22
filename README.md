# @inqling/svelte-icons

<p align="center">
  <img src="https://github.com/Inqling/svelte-icons/blob/main/static/banner.png" alt="Inqling Svelte Icons" width="830" height="212">
</p>

<p align="center">
  Combines <a href="https://heroicons.com"><strong>Heroicons &rarr;</strong></a> & <a href="https://simpleicons.org/"><strong>Simple Icons &rarr;</strong></a> for seamless use as SVG components in your svelte project.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@inqling/svelte-icons">
		<img src="https://img.shields.io/npm/v/@inqling/svelte-icons" alt="Latest Release">
	</a>
    <a href="https://github.com/Inqling/svelte-icons/blob/main/LICENSE">
		<img src="https://img.shields.io/npm/l/@inqling/svelte-icons.svg" alt="License">
	</a>
</p>

## Why this package?

Copying SVG code into your project can become tedious and messy. With icons it can become particularly unnecessary as you probably don't need to edit the SVG markup. This library simply makes it easier to import each icon and have it scale based on it's inherited font-size.

This library adapts the following repositories for use in Svelte:

-   Heroicons: [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)
-   Simple Icons: [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)

## Usage

### Install

```bash
# npm
npm i @inqling/svelte-icons
```

```bash
#yarn
yarn add @inqling/svelte-icons
```

### Importing Icons

#### Import from the package

```js
// Import from barrel files
import { BrandGithub } from "$lib/brand";
import { OutlinePlusCircle } from "$lib/outline";
import { SolidStar } from "$lib/solid";

// Import specific icons (Recommended)
import Github from "$lib/outline/annotation.svelte";
import PlusCircle from "$lib/outline/plus-circle.svelte";
import Star from "$lib/solid/star.svelte";
```

### Passed Props

Icons should behave as you expect

```html
<script>
	import OnePassword from "$lib/brand/1password";
</script>

<style>
	.locked {
		color: black;
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>

<OnePassword class="locked" />
```

### Styling

-   The icon will scale in size so that the height of the icon is the current font-size.
-   The icon will inherit the current text color.

##### Example: The icon inherits text styles from it's parent styles

```html
<script>
	import Github from "$lib/outline/annotation.svelte";
</script>

<style>
	.button {
		background: black;
		color: white;
		font-size: 16px;
		padding: 12px 20px;
	}

	.button :global(svg) {
		// The svg icon inherits the color and styles from it's sibling text elements.
		// Here, the font-size for the icon overrides it's inherited styles.
		// The height of the icon will be 24px and the width will adjust automatically.
		font-size: 24px;
	}
</style>

<button on:click={() => console.log("Hi mum!")}><Github class="locked" /> Login with GitHub</button>
```

## License

This library is MIT licensed.

## Updating and adding to the package

### Updating Heroicons

1. Make sure you have dependencies installed with `yarn install`.
2. Run `yarn heroicons` to clone and import the latest heroicons from [@tailwindlabs: heroicons/src](https://github.com/tailwindlabs/heroicons/tree/master/src).

### Updating Simple Icons

1. Make sure you have dependencies installed with `yarn install`.
2. Run `yarn simple-icons` to clone and import the latest heroicons from [@simple-icons: simple-icons/icons](https://github.com/simple-icons/simple-icons/tree/develop/icons).

### Adding new icons

1. Place all SVG icons in `/import` with one level of folder structure.
    - you should not nest svg's more than one level deep
    - only svg's are imported
    - svg code is not validated
    - svg attributes will be standardized
2. run `yarn import-svg` to convert all SVG files to svelte components.
3. Generated files can be found at `/src/lib/...`.

### Reference

##### Example folder structure

```
import/
	heroicons-solid/
		icon1.svg
		icon2.svg
		...
	heroicons-outline/
		icon1.svg
		icon2.svg
		...
	.gitkeep
	README.md (you're here)
package.json
...
```
