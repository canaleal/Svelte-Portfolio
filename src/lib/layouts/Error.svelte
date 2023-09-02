<script>
	import { page } from '$app/stores';
</script>

<div class="bg-error h-screen">
	<div class="container py-16  flex flex-col gap-8 text-center justify-center h-full">
		<p class="text-subtitle">{$page.status}: {$page.error?.message}</p>
		<p class="text-title">ERROR</p>
		<p>
			Welcome to the backrooms. Nothing exists here, so please use the Navbar to select another
			page.
		</p>
	
	</div>
</div>
