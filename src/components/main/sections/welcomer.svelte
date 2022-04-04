<script lang="ts">
	import LogoFull from '$assets/svg/logo-full.svg'
	import ParticlesWrapper from '$components/decor/particles-wrapper.svelte'
</script>

<ParticlesWrapper
	className="grid py-8 px-8 place-items-center text-center gap-4 container"
>
	<h1 class="font-playfair text-4xl leading-10">SpaceMC</h1>
	<p class="font-playfair text-2xl leading-10">
		Twój serwer, nasza kosmiczna rozgrywka.
	</p>
	<img src={LogoFull} alt="Full SpaceMC Logo" class="h-3/4" />
</ParticlesWrapper>
