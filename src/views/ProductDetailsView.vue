<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { addToCart } from '../store/cart';
import { getProductById } from '../data/products';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});

const router = useRouter();
const product = computed(() => getProductById(props.id));

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function addAndCheckout() {
  addToCart(product.value);
  router.push({ name: 'checkout' });
}
</script>

<template>
  <Card v-if="product" class="border border-slate-200 shadow-sm">
    <template #content>
      <div class="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
        <img :src="product.image" :alt="product.name" class="aspect-square w-full rounded-lg object-cover" />

        <div class="flex flex-col justify-center">
          <div class="mb-4 flex flex-wrap gap-2">
            <Tag :value="product.category" severity="info" />
            <Tag :value="product.status" severity="secondary" />
          </div>
          <h1 class="text-3xl font-bold text-ink">{{ product.name }}</h1>
          <p class="mt-4 text-lg leading-8 text-slate-600">{{ product.description }}</p>
          <p class="mt-3 rounded-lg bg-blue-50 p-4 text-sm leading-6 text-blue-900">
            Boa escolha para quem quer melhorar o setup sem transformar a compra em uma pesquisa infinita.
          </p>

          <div class="mt-6 grid gap-3 rounded-lg bg-slate-50 p-4 sm:grid-cols-3">
            <div>
              <p class="text-xs text-slate-500">Investimento</p>
              <p class="font-bold text-ink">{{ currency.format(product.price) }}</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">Disponivel agora</p>
              <p class="font-bold text-ink">{{ product.stock }} unidades</p>
            </div>
            <div>
              <p class="text-xs text-slate-500">Referencia</p>
              <p class="font-bold text-ink">#{{ product.id }}</p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <Button label="Colocar na sacola" icon="pi pi-cart-plus" @click="addToCart(product)" />
            <Button label="Levar agora" icon="pi pi-credit-card" severity="success" @click="addAndCheckout" />
            <RouterLink to="/">
              <Button label="Ver outras opcoes" icon="pi pi-arrow-left" severity="secondary" outlined />
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
  </Card>

  <Card v-else class="border border-slate-200 shadow-sm">
    <template #title>Produto nao encontrado</template>
    <template #content>
      <p class="mb-4 text-slate-600">Esse item nao esta mais na vitrine. Talvez tenha saido da curadoria.</p>
      <RouterLink to="/">
        <Button label="Voltar para vitrine" icon="pi pi-arrow-left" />
      </RouterLink>
    </template>
  </Card>
</template>
