<script>
	import { page } from '$app/stores';
</script>

<div class="bg-error">
	<div class="flex flex-col gap-8 px-8 py-16 container h-screen">
		<p class="text-subtitle">{$page.status}: {$page.error?.message}</p>
		<p class="text-title">ERROR</p>
		<p>
			Welcome to the backrooms. Nothing exists here, so please use the Navbar to select another
			page.
		</p>
	
	</div>
</div>
