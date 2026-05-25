import { computed, reactive } from 'vue';

export const cartState = reactive({
  items: [],
});

export const cartTotal = computed(() =>
  cartState.items.reduce((total, item) => total + item.price * item.quantity, 0),
);

export const cartCount = computed(() =>
  cartState.items.reduce((total, item) => total + item.quantity, 0),
);

export function addToCart(product) {
  const currentItem = cartState.items.find((item) => item.id === product.id);

  if (currentItem) {
    currentItem.quantity += 1;
    return;
  }

  cartState.items.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
  });
}

export function clearCart() {
  cartState.items = [];
}
