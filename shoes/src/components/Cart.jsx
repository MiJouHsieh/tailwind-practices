import { CartItem } from "./CartItem";
export function Cart({ cartItems }) {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {/* {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))} */}
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <li key={cartItem.product.id}>
              <CartItem item={cartItem} />
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </>
  );
}
