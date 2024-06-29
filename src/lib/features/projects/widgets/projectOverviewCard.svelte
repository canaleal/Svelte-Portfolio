<script lang="ts">
  export let title: string = 'Title'
  export let content: string = 'Content'
  export let subContent: string | number = 'SubContent'
  export let icon: string = 'ti-home'
  export let iconColor: string = ''
</script>

<div class="flex-1 flex flex-col rounded-md px-4 py-4 bg-dark-700 border border-dark-400">
  <div class="flex flex-row items-center justify-between mb-2">
    <p class="text-sm font-bold text-white">{title}</p>
    <i class="{icon} {iconColor}" />
  </div>
  <p class="text-xl font-semibold text-white">{content}</p>
  <p class="text-xs mt-2">{subContent}</p>
</div>
