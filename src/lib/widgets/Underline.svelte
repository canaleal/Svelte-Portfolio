<script lang="ts">
    export let isLarge = false;
    export let size = 'h-1';
    export let isRounded = true
</script>

<hr class="bg-primary {isLarge? "w-32":"w-16"} {size} {isRounded? "rounded-lg" : ""}" />