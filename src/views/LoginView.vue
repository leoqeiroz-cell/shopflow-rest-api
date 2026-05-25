<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import { useRoute, useRouter } from 'vue-router';
import { loginAs } from '../store/auth';

const route = useRoute();
const router = useRouter();

function authenticate(role) {
  loginAs(role);
  router.push(route.query.redirect || (role === 'ADMIN' ? { name: 'admin-products' } : { name: 'home' }));
}
</script>

<template>
  <Card class="mx-auto max-w-2xl border border-slate-200 shadow-sm">
    <template #title>Como voce quer entrar?</template>
    <template #subtitle>
      Para esta atividade, o login e simulado. Assim da para ver claramente o que cada perfil pode acessar.
    </template>

    <template #content>
      <div class="grid gap-4 sm:grid-cols-2">
        <button
          class="rounded-lg border border-slate-200 bg-white p-5 text-left transition hover:border-brand hover:shadow-sm"
          type="button"
          @click="authenticate('CUSTOMER')"
        >
          <i class="pi pi-user mb-4 text-2xl text-brand" />
          <h2 class="font-semibold text-ink">Sou cliente</h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            Continua a compra e libera o checkout quando voce ja escolheu seus produtos.
          </p>
        </button>

        <button
          class="rounded-lg border border-slate-200 bg-white p-5 text-left transition hover:border-mint hover:shadow-sm"
          type="button"
          @click="authenticate('ADMIN')"
        >
          <i class="pi pi-shield mb-4 text-2xl text-mint" />
          <h2 class="font-semibold text-ink">Sou da equipe</h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            Abre a area de gestao, com produtos, estoque e relatorios da loja.
          </p>
        </button>
      </div>
    </template>

    <template #footer>
      <RouterLink to="/">
        <Button label="Voltar para a vitrine" icon="pi pi-arrow-left" severity="secondary" outlined />
      </RouterLink>
    </template>
  </Card>
</template>
