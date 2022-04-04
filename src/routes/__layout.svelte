<script>
	import '../global.css'
	import Navbar from '$components/Navbar.svelte'
	import { Title } from '$store/'

	Title().subscribe(newTitle => {
		title = newTitle
	})
	$: title = 'SpaceMC'
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="true"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="relative min-h-screen bg-black">
	<Navbar />
	<div class="min-h-screen pt-44 xs:pt-24">
		<slot />
	</div>
</main>
