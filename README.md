# Svelte Heroicons

<p align="center">
  <img src="https://raw.githubusercontent.com/tailwindlabs/heroicons/master/.github/logo.svg" alt="Heroicons">
</p>

<p align="center">
  An set of 450+ free MIT-licensed high-quality SVG icons for you to use in your web projects. <br>Available as an unofficial <b>Svelte</b> library. Browse the complete set at <a href="https://heroicons.com"><strong>Heroicons.com &rarr;</strong></a>
</p>

<p align="center">
    <a href="https://github.com/tailwindlabs/heroicons/releases"><img src="https://img.shields.io/npm/v/@inqling/svelte-heroicons
" alt="Latest Release"></a>
    <a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@inqling/svelte-heroicons
.svg" alt="License"></a>
</p>

## Why this package?

Copying SVG code into your project can become tedious and messy if you don't need to edit the SVG markup. This library simply makes it easier to import each icon and have it scale based on it's inherited font-size.

_Find the original repository for Heroicons on Github: [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)_

## Basic Usage

```html
<script>
	import { AcademicCap } from "@inqling/svelte-heroicons";
</script>

<style>
	.icon {
		font-size: 40px;
		color: red;
	}
</style>

<div class="icon"><AcademicCap /></div>
```

importing icons from `@inqling/svelte-heroicons` will use solid icons by default. You can manually import outline icons from `@inqling/svelte-heroicons/outline`.
Example:

```html
<script lang="ts">
	import { AcademicCap } from "@inqling/svelte-heroicons/outline";
</script>
```

To improve performance and bundle size, you can import icons directly: `@inqling/svelte-heroicons/svg/<type>/<icon>.svelte`

Example:

```html
<script lang="ts">
	import Icon from "@inqling/svelte-heroicons/svg/outline/academic-cap.svelte";
</script>
```

## Styling

-   The icon will scale in size so that the height of the icon is the current font-size.
-   The icon will inherit the current text color.

## To-do

-   [ ] Add SVG component that loads paths dynamically.
-   [ ] Include a component to dynamically set the icon. Ex `<Icon type="icon-name" />`.

## License

This library is MIT licensed.
