<script>
	import Button from '$components/common/button.svelte'
	import Input from '$components/common/input.svelte'
	import { FontAwesomeIcon } from 'fontawesome-svelte'
	import { faRocket } from '@fortawesome/free-solid-svg-icons'
	import ParticlesWrapper from '$components/decor/particles-wrapper.svelte'

	const captchaKey = import.meta.env.VITE_CAPTCHA_KEY
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<ParticlesWrapper className="min-h-screen overflow-hidden">
	<div
		class="grid h-full place-items-center content-center items-center gap-4"
	>
		<h1 class="text-center font-playfair text-4xl">Logowanie do systemu</h1>
		<form
			class="grid place-items-center items-center gap-4 rounded-lg bg-blue-700 p-4 md:container md:w-1/2 md:p-16"
		>
			<div class="hidden -rotate-45 text-4xl md:block">
				<FontAwesomeIcon icon={faRocket} />
			</div>

			<span>Miło cie spowrotem widzieć 🤗</span>

			<Input className="w-full" name="nick" label="Nick" />

			<Input
				className="w-full"
				name="password"
				label="Hasło"
				type="password"
			/>

			<div
				class="h-captcha"
				data-sitekey={captchaKey}
				data-callback="onSubmit"
				data-size="invisible"
			/>

			<Button className="w-1/2">Zaloguj</Button>
		</form>
	</div>
</ParticlesWrapper>
