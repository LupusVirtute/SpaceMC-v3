<script>
	export let className = ''
</script>

<button class={'bg-blue-800 px-4 py-2 rounded-full ' + className}>
	<slot />
</button>
