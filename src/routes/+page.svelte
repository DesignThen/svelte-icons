<script>
	// Import from the package
	import { Brand, Outline, Solid } from "$lib";
	// Import from barrel files
	import { BrandGithub } from "$lib/brand";
	import { OutlinePlusCircle } from "$lib/outline";
	import { SolidStar } from "$lib/solid";
	// Import specific icons
	import Github from "$lib/outline/annotation.svelte";
	import PlusCircle from "$lib/outline/plus-circle.svelte";
	import Star from "$lib/solid/star.svelte";
</script>

<style>
	.icon {
		font-size: 40px;
		color: red;
	}

	section :global(svg) {
		fill: red;
	}
</style>

<section>
	<h4>Import from the package</h4>
	<code lang="html">
		<pre>from "@inqling/svelte-icons"</pre>
	</code>
	<div class="icon"><Solid.SolidStar /></div>
	<div class="icon"><Outline.OutlinePlusCircle /></div>
	<div class="icon"><Brand.BrandGithub /></div>
</section>

<section>
	<h4>Import from barrel files</h4>
	<code lang="html">
		<pre>"@inqling/svelte-icons/solid"</pre>
		<pre>"@inqling/svelte-icons/outline"</pre>
		<pre>"@inqling/svelte-icons/brand"</pre>
	</code>
	<div class="icon"><SolidStar /></div>
	<div class="icon"><OutlinePlusCircle /></div>
	<div class="icon"><BrandGithub /></div>
</section>

<section>
	<h4>Import from barrel files</h4>
	<code lang="html">
		<pre>"@inqling/svelte-icons/brand/apacheairflow.svelte"</pre>
		<pre>"@inqling/svelte-icons/brand/twitter.svelte"</pre>
		<pre>"@inqling/svelte-icons/outline/annotation.svelte"</pre>
	</code>
	<div class="icon"><Star /></div>
	<div class="icon"><PlusCircle /></div>
	<div class="icon"><Github /></div>
</section>
