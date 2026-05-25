import { reactive } from 'vue';

export const authState = reactive({
  isAuthenticated: false,
  user: null,
});

export function loginAs(role) {
  authState.isAuthenticated = true;
  authState.user = {
    name: role === 'ADMIN' ? 'Marina Admin' : 'Cliente Prime',
    role,
  };
}

export function logout() {
  authState.isAuthenticated = false;
  authState.user = null;
}
