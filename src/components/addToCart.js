import { useRootState } from "@/context/RootStateContext";
import { useState } from "react";

export default function AddToCart({ className = '', product }) {

  const { cart, setCart } = useRootState()
  const item = cart.find(item => item.id === product.id)

  const [qty, setQty] = useState(item ? item.qty : 0);


  const addQty = () => {
    setQty(qty + 1)

    const productIndexInCart = cart.findIndex(item => item.id === product.id)

    if (productIndexInCart !== -1) {
      // Product exists in cart, update its qty
      const newCart = [...cart]
      newCart[productIndexInCart] = { ...newCart[productIndexInCart], qty: qty + 1, stock: newCart[productIndexInCart].stock - 1 }
      setCart(newCart)
    } else {
      // Product does not exist in cart, add it
      setCart([...cart, { ...product, qty: qty + 1, stock: product.stock - 1 }])
    }
  }

  const reduceQty = () => {
    if (qty > 0) {
      setQty(qty - 1)

      const productIndexInCart = cart.findIndex(item => item.id === product.id)

      if (productIndexInCart !== -1) {
        const newCart = [...cart]
        if (newCart[productIndexInCart].qty > 1) {
          // If product's qty is more than 1, reduce it
          newCart[productIndexInCart] = { ...newCart[productIndexInCart], qty: qty - 1, stock: newCart[productIndexInCart].stock + 1 }
        } else {
          // If product's qty is 1, remove the product from cart
          newCart.splice(productIndexInCart, 1)
        }
        setCart(newCart)
      }
    }
  }

  return (
    <div className={className}>
      <div className="input-group mb-3">
        <button onClick={reduceQty} className="btn btn-primary" type="button"><i className="bi bi-dash"></i></button>
        <input readOnly type="number" className="form-control text-center" value={qty} />
        <button onClick={addQty} disabled={qty == product.stock} className="btn btn-primary" type="button"><i className="bi bi-plus"></i></button>
      </div>
      <span>Stock: {item ? item.stock : product.stock}</span>
    </div>
  );
}