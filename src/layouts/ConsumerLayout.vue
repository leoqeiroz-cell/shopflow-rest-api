<script setup>
import AppHeader from '../components/AppHeader.vue';
import CartSummary from '../components/CartSummary.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <AppHeader />
    <main class="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[1fr_320px] lg:px-8">
      <section class="min-w-0">
        <RouterView />
      </section>
      <CartSummary />
    </main>
  </div>
</template>
