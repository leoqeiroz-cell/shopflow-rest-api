<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Tag from 'primevue/tag';
import { products } from '../../data/products';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function stockSeverity(stock) {
  if (stock <= 10) return 'danger';
  if (stock <= 20) return 'warn';
  return 'success';
}
</script>

<template>
  <Card class="border border-zinc-200 shadow-sm">
    <template #title>Produtos cadastrados</template>
    <template #subtitle>
      Listagem administrativa com PrimeVue DataTable.
    </template>

    <template #content>
      <DataTable
        :value="products"
        data-key="id"
        striped-rows
        paginator
        :rows="5"
        table-style="min-width: 760px"
      >
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Produto" sortable />
        <Column field="category" header="Categoria" sortable>
          <template #body="{ data }">
            <Tag :value="data.category" severity="info" />
          </template>
        </Column>
        <Column field="status" header="Status" sortable>
          <template #body="{ data }">
            <span class="text-sm font-medium text-zinc-700">{{ data.status }}</span>
          </template>
        </Column>
        <Column field="price" header="Preco" sortable>
          <template #body="{ data }">
            {{ currency.format(data.price) }}
          </template>
        </Column>
        <Column field="stock" header="Estoque" sortable>
          <template #body="{ data }">
            <Tag :value="`${data.stock} un.`" :severity="stockSeverity(data.stock)" />
          </template>
        </Column>
        <Column header="Acoes">
          <template #body>
            <div class="flex gap-2">
              <Button icon="pi pi-pencil" severity="secondary" rounded text aria-label="Editar" />
              <Button icon="pi pi-chart-line" severity="info" rounded text aria-label="Indicadores" />
            </div>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>
