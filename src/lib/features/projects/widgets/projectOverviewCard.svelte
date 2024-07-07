<script lang="ts">
  export let title: string = 'Title';
  export let content: string = 'Content';
  export let subContent: string | number = 'SubContent';
  export let icon: string = 'ti-home';
  export let iconColor: string = '';
  export let fadeInDelayMultiplier: number = 0;
</script>

<div class="flex-1 flex flex-col p-4 border shadow-md rounded-md hover:scale-105 transition-all duration-300 fade-in gap-2" style="animation-delay: {fadeInDelayMultiplier * 200}ms">
  <div class="flex flex-row items-center justify-between">
    <p class="text-sm font-bold">{title}</p>
    <i class="{icon} {iconColor}" />
  </div>
  <p class="text-xl font-bold">{content}</p>
  <p class="text-xs">{subContent}</p>
</div>

<style lang="postcss">
  .fade-in {
    animation: fade-in 0.3s ease-in-out both;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
