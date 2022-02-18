<template>
  <div class="flex flex-col min-h-screen">
    <PresentationalHeader />
    <main class="flex-1">
      <slot />
    </main>

    <PresentationalFooter />
  </div>
</template>
