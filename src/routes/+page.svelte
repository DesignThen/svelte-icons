<script lang="ts">
	import { Star } from "$lib/heroicon-20-solid";
	import { PlusCircle } from "$lib/heroicon-24-outline";
	import { Github } from "$lib/simple-icons";
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
	<h4>Import from barrel files</h4>
	<code lang="html">
		<pre>import {"{ Star }"} from "$lib/heroicon-20-solid";</pre>
		<pre>import {"{ PlusCircle }"} from "$lib/heroicon-24-outline";</pre>
		<pre>import {"{ Github }"} from "$lib/simple-icons";</pre>
	</code>
	<div class="icon"><Star /></div>
	<div class="icon"><PlusCircle /></div>
	<div class="icon"><Github /></div>
</section>
