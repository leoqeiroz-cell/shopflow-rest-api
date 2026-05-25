<script setup>
import Card from 'primevue/card';
import Panel from 'primevue/panel';

const metrics = [
  { label: 'Receita deste mes', value: 'R$ 48.920', icon: 'pi pi-wallet' },
  { label: 'Pedidos que chegaram bem', value: '186', icon: 'pi pi-check-circle' },
  { label: 'Valor medio por compra', value: 'R$ 263', icon: 'pi pi-chart-bar' },
];

const salesFlow = [
  { stage: 'Vitrine', value: '1.240 acessos', color: 'bg-blue-500' },
  { stage: 'Detalhes', value: '418 visitas', color: 'bg-teal-500' },
  { stage: 'Checkout', value: '203 inicios', color: 'bg-orange-500' },
  { stage: 'Pedidos', value: '186 pagos', color: 'bg-emerald-500' },
];
</script>

<template>
  <div class="space-y-5">
    <section class="grid gap-4 md:grid-cols-3">
      <Card v-for="metric in metrics" :key="metric.label" class="border border-zinc-200 shadow-sm">
        <template #content>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-zinc-500">{{ metric.label }}</p>
              <p class="mt-1 text-2xl font-bold text-zinc-900">{{ metric.value }}</p>
            </div>
            <i :class="[metric.icon, 'text-2xl text-brand']" />
          </div>
        </template>
      </Card>
    </section>

    <Panel header="Leitura rapida do dia">
      <div class="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div class="rounded-lg bg-zinc-50 p-5">
          <p class="font-semibold text-zinc-900">O que esta saindo melhor</p>
          <p class="mt-2 text-sm leading-6 text-zinc-600">
            Notebook Aura 14 e Headset Pulse Pro concentram a maior parte dos pedidos do mes.
          </p>
        </div>
        <div class="rounded-lg bg-zinc-50 p-5">
          <p class="font-semibold text-zinc-900">Ponto de atencao</p>
          <p class="mt-2 text-sm leading-6 text-zinc-600">
            O Monitor Vision 27 esta abaixo do limite operacional e deve ser priorizado na reposicao.
          </p>
        </div>
      </div>
    </Panel>

    <Panel header="Caminho dos clientes">
      <div class="space-y-4">
        <div v-for="item in salesFlow" :key="item.stage" class="grid gap-2 sm:grid-cols-[120px_1fr_110px] sm:items-center">
          <span class="text-sm font-medium text-zinc-700">{{ item.stage }}</span>
          <div class="h-3 overflow-hidden rounded-full bg-zinc-100">
            <div :class="['h-full rounded-full', item.color]" :style="{ width: `${35 + salesFlow.indexOf(item) * 15}%` }" />
          </div>
          <span class="text-sm text-zinc-500">{{ item.value }}</span>
        </div>
      </div>
    </Panel>
  </div>
</template>
