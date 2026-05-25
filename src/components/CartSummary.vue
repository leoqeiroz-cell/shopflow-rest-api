<script setup>
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { cartState, cartTotal, clearCart } from '../store/cart';

const router = useRouter();
const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
</script>

<template>
  <aside class="sticky top-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-base font-semibold text-ink">Sua sacola</h2>
      <i class="pi pi-shopping-cart text-brand" />
    </div>

    <div v-if="cartState.items.length" class="space-y-3">
      <div
        v-for="item in cartState.items"
        :key="item.id"
        class="flex items-start justify-between gap-3 border-b border-slate-100 pb-3"
      >
        <div>
          <p class="text-sm font-medium text-slate-800">{{ item.name }}</p>
          <p class="text-xs text-slate-500">Qtd. {{ item.quantity }}</p>
        </div>
        <p class="text-sm font-semibold text-slate-900">
          {{ currency.format(item.price * item.quantity) }}
        </p>
      </div>

      <div class="flex items-center justify-between pt-2">
        <span class="text-sm text-slate-500">Total por enquanto</span>
        <strong class="text-lg text-ink">{{ currency.format(cartTotal) }}</strong>
      </div>

      <Button
        label="Ir para pagamento"
        icon="pi pi-credit-card"
        class="w-full"
        @click="router.push({ name: 'checkout' })"
      />
      <Button
        label="Esvaziar sacola"
        icon="pi pi-trash"
        severity="secondary"
        text
        class="w-full"
        @click="clearCart"
      />
    </div>

    <div v-else class="rounded-lg bg-slate-50 p-4 text-sm text-slate-500">
      Sua sacola ainda esta tranquila. Quando algo chamar sua atencao, ele aparece aqui.
    </div>
  </aside>
</template>
