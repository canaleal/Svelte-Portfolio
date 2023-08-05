<script lang="ts">
    export let color = 'bg-white';
    export let isLarge = false;
    export let size = 'h-0.5';
    export let isRounded = true
</script>

<hr class="{color} mt-2 mb-2 {isLarge? "w-32":"w-16"} {size} {isRounded? "rounded-lg" : ""}" />

