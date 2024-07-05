<script lang="ts">
  export let title: string = 'Title'
  export let content: string = 'Content'
  export let subContent: string | number = 'SubContent'
  export let icon: string = 'ti-home'
  export let iconColor: string = ''
</script>

<div class="flex-1 flex flex-col p-4 border shadow-md hover:scale-105 transition-all duration-300 rounded-sm">
  <div class="flex flex-row items-center justify-between mb-2">
    <p class="text-sm font-bold ">{title}</p>
    <i class="{icon} {iconColor}" />
  </div>
  <p class="text-xl font-bold ">{content}</p>
  <p class="text-xs mt-2">{subContent}</p>
</div>
