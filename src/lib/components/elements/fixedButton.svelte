<script context="module" lang="ts">
  export const FIXED_BUTTON_POSITION = {
    topLeft: 'top-8 left-8 text-right',
    topRight: 'top-8 right-8 text-left',
    bottomLeft: 'bottom-8 left-8 text-right',
    bottomRight: 'bottom-8 right-0  text-left'
  }

  export const FIXED_BUTTON_STYLE = {
    base: 'z-30 fixed font-bold shadow-md transition-all ',
    color: 'bg-frog-600 hover:bg-frog-800 text-white',
    visible: 'w-44 px-3 py-3',
    invisible: 'w-0 overflow-hidden py-3 px-0'
  }
</script>
