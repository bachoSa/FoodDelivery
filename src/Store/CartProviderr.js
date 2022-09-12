import CartContext from "./cart-context";

const CartProviderr = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartConext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartConext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProviderr;
