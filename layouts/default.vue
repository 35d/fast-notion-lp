<template>
  <div>
    <PortalTarget name="global-modal" class="l-modal"> </PortalTarget>
    <nuxt />
  </div>
</template>

<style>
.l-modal {
  z-index: 100;
  position: relative;
}
</style>
