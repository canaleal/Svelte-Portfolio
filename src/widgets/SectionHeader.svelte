<script lang="ts">
    export let color = "bg-dark";
    export let rounded = "";
    export let title = "Section Header";
</script>

<div class={`${color} ${rounded}  py-5 text-center text-white top-0 z-6`}>
    <h1 class="text-4xl">{title}</h1>
  </div>
