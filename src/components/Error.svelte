
<script>
  import { page } from '$app/stores';
	import SectionHeader from '../widgets/SectionHeader.svelte';
</script>

 <section>
    <SectionHeader title="404 Error" color="bg-red" />
    <div class="px-5 my-4 ">
      <p>Welcome to the backrooms. Nothing exists here, so please use the Navbar to select another page.</p>
      <p>{$page.status}: {$page.error?.message}</p>

    </div>
  </section>