<script lang="ts">
  import './style/style.css'
</script>

<div class="card">
  <div class="card__left">
    <slot name="left" />
  </div>
  <div class="card__right">
    <slot name="right" />
  </div>
</div>
