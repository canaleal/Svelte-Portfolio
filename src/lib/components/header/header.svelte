<script lang="ts">
  import ContactIcons from './contactIcons.svelte'

</script>

<header id="Header">
  <div class="max-w-6xl flex justify-between w-full items-center h-full">
    <h1 class="text-2xl uppercase font-extrabold">Alex Canales</h1>
    <ContactIcons />
  </div>
</header>

<style lang="postcss">
  #Header {
    @apply w-screen fixed flex flex-col items-center bg-dark-900 text-white z-30 px-8  h-16;
  }
</style>
