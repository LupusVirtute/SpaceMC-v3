<script lang="ts">
	import LogoFull from '$assets/svg/logo-full.svg'
	import ParticlesWrapper from '$components/decor/particles-wrapper.svelte'
</script>

<ParticlesWrapper
	className="grid py-8 px-8 place-items-center text-center gap-4 container"
>
	<h1 class="text-4xl font-playfair">SpaceMC</h1>

	<img src={LogoFull} alt="Full SpaceMC Logo" class="h-3/4" />
</ParticlesWrapper>
