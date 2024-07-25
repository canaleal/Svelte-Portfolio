<script lang="ts">
  export let title: string = 'Title';
  export let content: string = 'Content';
  export let subContent: string | number = 'SubContent';
  export let icon: string = 'ti-home';
  export let iconColor: string = '';
  export let fadeInDelayMultiplier: number = 0;
</script>

<div class="overview-card fade-in" style="animation-delay: {fadeInDelayMultiplier * 200}ms">
  <div class="overview-card__header">
    <p class="text-sm font-bold">{title}</p>
    <i class="{icon} {iconColor}" />
  </div>
  <p class="text-xl font-bold">{content}</p>
  <p class="text-xs">{subContent}</p>
</div>

<style lang="postcss">

  .overview-card {
    @apply flex-1 flex flex-col p-4 border  rounded-md  transition-all duration-300 gap-2;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.07), 0 1px 18px 0 rgba(0, 0, 0, 0.08);
  }

  .overview-card:hover {
    box-shadow: 0 6px 10px -1px rgba(0, 0, 0, 0.15), 0 8px 20px 0 rgba(0, 0, 0, 0.1), 0 4px 25px 0 rgba(0, 0, 0, 0.15);
  }

  .overview-card__header {
    @apply flex flex-row items-center justify-between;
  }

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
