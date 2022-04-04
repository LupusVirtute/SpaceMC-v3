<script>
	import { FontAwesomeIcon } from 'fontawesome-svelte'
	import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

	export const prerender = false
	export let label
	export let name
	export let type = 'text'
	export let className = ''

	let initialType = type

	let input

	$: passwordSwitch = false

	function switchPassword(e) {
		e.preventDefault()

		passwordSwitch = !passwordSwitch

		input.type = passwordSwitch ? 'password' : 'text'
	}
</script>

<div class={'group flex flex-col items-start ' + className}>
	<label class="ml-4 rounded-t-lg bg-blue-900 py-2 px-4" for={name}
		>{label}</label
	>
	<div class="relative w-full overflow-hidden rounded-lg">
		<input
			bind:this={input}
			{type}
			{name}
			class="w-full rounded-lg border-none bg-blue-800 text-sm focus:border-none focus:bg-blue-900 focus:ring-0"
		/>

		{#if initialType == 'password'}
			<button
				on:click={switchPassword}
				class="absolute bottom-0 right-0 grid hidden h-full cursor-pointer place-items-center bg-blue-900 px-1 hover:text-gray-500 md:block"
			>
				{#if passwordSwitch}
					<FontAwesomeIcon icon={faEye} />
				{:else}
					<FontAwesomeIcon icon={faEyeSlash} />
				{/if}
			</button>
		{/if}
	</div>
</div>
