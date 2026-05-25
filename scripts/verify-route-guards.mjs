import assert from 'node:assert/strict';
import { validateRouteAccess } from '../src/router/guards.js';

const guestCheckout = validateRouteAccess(
  {
    fullPath: '/checkout',
    meta: { requiresAuth: true },
  },
  { isAuthenticated: false, user: null },
);

assert.deepEqual(guestCheckout, {
  name: 'login',
  query: { redirect: '/checkout' },
});

const customerAdmin = validateRouteAccess(
  {
    fullPath: '/admin/produtos',
    meta: { requiresAuth: true, requiresRole: 'ADMIN' },
  },
  { isAuthenticated: true, user: { name: 'Cliente Prime', role: 'CUSTOMER' } },
);

assert.deepEqual(customerAdmin, { name: 'home' });

const adminProducts = validateRouteAccess(
  {
    fullPath: '/admin/produtos',
    meta: { requiresAuth: true, requiresRole: 'ADMIN' },
  },
  { isAuthenticated: true, user: { name: 'Marina Admin', role: 'ADMIN' } },
);

assert.equal(adminProducts, true);

console.log('Route guards verified: checkout auth and admin role are protected.');
