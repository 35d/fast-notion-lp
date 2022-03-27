<template>
  <div class="flex flex-col min-h-screen">
    <PresentationalHeader />
    <main class="flex-1 -mt-16 md:-mt-20">
      <slot />
    </main>

    <PresentationalFooter />
  </div>
</template>
