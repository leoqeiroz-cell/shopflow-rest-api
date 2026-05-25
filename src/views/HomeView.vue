<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import { products } from '../data/products';
import { addToCart } from '../store/cart';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
</script>

<template>
  <div class="space-y-6">
    <section class="rounded-lg bg-white p-6 shadow-sm">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide text-brand">Curadoria da semana</p>
          <h1 class="mt-2 text-3xl font-bold text-ink">Um setup mais leve para trabalhar, estudar e criar</h1>
          <p class="mt-2 max-w-2xl text-slate-600">
            Separamos poucos produtos, mas com escolhas bem pensadas: tela boa, som limpo,
            teclado confortavel e uma compra sem caminho confuso.
          </p>
        </div>

        <div class="grid grid-cols-3 gap-2 rounded-lg bg-slate-50 p-3 text-center">
          <div>
            <p class="text-lg font-bold text-brand">4</p>
            <p class="text-xs text-slate-500">escolhas</p>
          </div>
          <div>
            <p class="text-lg font-bold text-mint">75</p>
            <p class="text-xs text-slate-500">em estoque</p>
          </div>
          <div>
            <p class="text-lg font-bold text-coral">24h</p>
            <p class="text-xs text-slate-500">separacao</p>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="product in products" :key="product.id" class="overflow-hidden border border-slate-200 shadow-sm">
        <template #header>
          <img :src="product.image" :alt="product.name" class="h-48 w-full object-cover" />
        </template>

        <template #title>
          <div class="flex items-start justify-between gap-3">
            <span>{{ product.name }}</span>
            <Tag :value="product.status" severity="info" />
          </div>
        </template>

        <template #subtitle>
          <span class="text-lg font-bold text-ink">{{ currency.format(product.price) }}</span>
        </template>

        <template #content>
          <p class="line-clamp-3 text-sm leading-6 text-slate-600">
            {{ product.description }}
          </p>
        </template>

        <template #footer>
          <div class="flex flex-wrap gap-2">
            <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
              <Button label="Conhecer melhor" icon="pi pi-eye" outlined />
            </RouterLink>
            <Button label="Quero este" icon="pi pi-cart-plus" @click="addToCart(product)" />
          </div>
        </template>
      </Card>
    </section>
  </div>
</template>
