import { createRouter, createWebHistory } from 'vue-router';
import { validateRouteAccess } from './guards';

const ConsumerLayout = () => import('../layouts/ConsumerLayout.vue');
const AdminLayout = () => import('../layouts/AdminLayout.vue');
const HomeView = () => import('../views/HomeView.vue');
const ProductDetailsView = () => import('../views/ProductDetailsView.vue');
const CheckoutView = () => import('../views/CheckoutView.vue');
const LoginView = () => import('../views/LoginView.vue');
const AdminProductsView = () => import('../views/admin/AdminProductsView.vue');
const AdminReportsView = () => import('../views/admin/AdminReportsView.vue');

const routes = [
  {
    path: '/',
    component: ConsumerLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { breadcrumb: 'Home' },
      },
      {
        path: 'produto/:id',
        name: 'product-details',
        component: ProductDetailsView,
        props: true,
        meta: { breadcrumb: 'Detalhes do produto' },
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: CheckoutView,
        meta: { requiresAuth: true, breadcrumb: 'Checkout' },
      },
      {
        path: 'login',
        name: 'login',
        component: LoginView,
        meta: { breadcrumb: 'Login' },
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresRole: 'ADMIN', breadcrumb: 'Admin' },
    children: [
      {
        path: '',
        redirect: { name: 'admin-products' },
      },
      {
        path: 'produtos',
        name: 'admin-products',
        component: AdminProductsView,
        meta: { breadcrumb: 'Produtos' },
      },
      {
        path: 'relatorios',
        name: 'admin-reports',
        component: AdminReportsView,
        meta: { breadcrumb: 'Relatorios' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => validateRouteAccess(to));

export default router;
