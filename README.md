# @inqling/svelte-icons

<p align="center">
  <img src="https://github.com/Inqling/svelte-icons/blob/main/static/banner.png" alt="Inqling Svelte Icons" width="830" height="212">
</p>

<p align="center">
  Combines <a href="https://heroicons.com"><strong>Heroicons &rarr;</strong></a> & <a href="https://simpleicons.org/"><strong>Simple Icons &rarr;</strong></a> for seamless use as SVG components in your svelte project.
</p>

<p align="center">
    <a href="https://github.com/@inqling/svelte-icons/releases">
		<img src="https://img.shields.io/npm/v/@inqling/svelte-heroicons" alt="Latest Release">
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

### Basic Use Case

```html
<script>
	import Annotation from "$lib/outline/annotation.svelte";
	import Upload from "$lib/solid/upload.svelte";
	import Twitter from "$lib/brand/twitter.svelte";
</script>

<style>
	.icon {
		font-size: 40px;
		color: red;
	}
</style>

<div class="icon">
	<Annotation />
	<Upload />
	<Twitter />
</div>
```

### Passed Props

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

### Default Export

You can import solid and outline heroicons by default. Outline icons end in `_O`.

```html
<script>
	import { ArrowCircleUp, ArrowCircleUp_O } from "$lib";
</script>

<style>
	.icon {
		font-size: 40px;
		color: red;
	}
</style>

<div class="icon">
	<ArrowCircleUp />
	<ArrowCircleUp_O />
</div>
```

## Styling

-   The icon will scale in size so that the height of the icon is the current font-size.
-   The icon will inherit the current text color.

## To-do

-   [ ] Add a script to import and format future icon updates in [heroicons](https://github.com/tailwindlabs/heroicons) and [simple-icons](https://github.com/simple-icons/simple-icons)

## License

This library is MIT licensed.
