# Importer

### Instructions

1. Place all SVG icons here, in `/svg/import` in the desired folder structure.
    - you should not nest svg's more than one level deep
    - only svg's are imported
    - svg code is not validated
2. run `yarn util:import` to convert all SVG files to svelte components.
3. Generated files can be found at `/src/lib/...`.

### Reference

##### Example folder structure

```
svg/
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
	.gitkeep
	import.cjs
	README.md (you're here)
```
