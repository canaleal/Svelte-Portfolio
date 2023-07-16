<script>
	import { page } from '$app/stores';
	import SectionHeader from '../components/ui/SectionHeader.svelte';
</script>

<SectionHeader title="404 Error" color="bg-red" />
<div class="p-8 ">
	<p>
		Welcome to the backrooms. Nothing exists here, so please use the Navbar to select another page.
	</p>
	<p>{$page.status}: {$page.error?.message}</p>
</div>
