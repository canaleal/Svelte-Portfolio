<script lang="ts">

    export let url = '';
    export let hasColor = true;
    export let iconSize = 'w-12';
    export let isLazy = true;

</script>

<img
    height="100"
    width="auto"
    class={`img-icon ${hasColor ? 'img-icon-color' : ''} ${iconSize} mx-2 py-2`}
    src={url}
    alt={url}
    loading={isLazy ? 'lazy' : 'eager'}
/>
