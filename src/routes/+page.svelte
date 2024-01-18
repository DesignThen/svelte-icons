<script>
	import { Star } from "$lib/heroicon-20-solid";
	import { PlusCircle } from "$lib/heroicon-24-outline";
	import { Github, I500px } from "$lib/simple-icons";
	import Example from "./example.svelte?raw";
</script>

<section>
	<h4>Import from barrel files</h4>
	<code lang="html">{Example}</code>

	<Star class="icon" />
	<PlusCircle class="icon" />
	<Github class="icon" />
	<I500px class="icon" />
</section>

<style>
	:global(.icon) {
		width: 24px;
		height: 24px;
	}

	section :global(svg) {
		fill: red;
	}
</style>
