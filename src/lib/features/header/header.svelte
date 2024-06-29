<script lang="ts">
  import DecorationBar from '$lib/components/elements/decorationBar.svelte'
import ContactIcons from './contactIcons.svelte'
  import Navigation from './navigation.svelte'
</script>

<header id="Header" class="flex flex-col max-h-1/2  xl:fixed justify-between">

  <DecorationBar title="Test" />

  <h1 class="text-3xl uppercase font-extrabold text-white">Alex Canales</h1>
  <h2 class="text-md font-semibold text-frog-800 mt-2">Software Developer</h2>

  <Navigation extraClasses="mt-16" />
  <ContactIcons extraClasses="mt-16 xl:mt-32" />
</header>
