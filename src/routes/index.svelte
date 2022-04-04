<script lang="ts">
	import Explainer from '$components/main/sections/explainer.svelte'
	import GameTypes from '$components/main/sections/gametypes.svelte'
	import Welcomer from '$components/main/sections/welcomer.svelte'
</script>

<div class="grid place-items-center overflow-x-hidden">
	<Welcomer />
	<Explainer />
	<GameTypes />
</div>
