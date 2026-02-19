<template>
  <div class="wip-notification">This website is a work in progress</div>
</template>

<script>
export default {
  name: 'WIPNotif',
}
</script>

<style scoped>
.wip-notification {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 16px 24px;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  font-size: 1.5rem;
  z-index: 1000;

  max-height: 10dvh;
}
</style>
