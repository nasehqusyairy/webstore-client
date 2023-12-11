'use client'
import AddToCart from '@/components/addToCart';
import ErrorMessage from '@/components/errorMessage';
import PriceLabel from '@/components/priceLabel';
import { useRootState } from '@/context/RootStateContext';
import http from '@/helpers/http';
import { toRupiah } from '@/helpers/rupiah';
import PlaceholderImage from '@/img/product.jpg';
import Link from 'next/link';
import { useState } from 'react';

function CartPage() {

  const { error, setError, cart, setCart, globalState, setGlobalState,
    selectedShipping, setSelectedShipping,
    selectedAddress, setSelectedAddress,
    selectedCard, setSelectedCard } = useRootState();

  const countItems = cart.reduce((total, item) => total + item.stock, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const totalDiscount = cart.reduce((total, item) => total + (item.discount * item.qty), 0);
  const shippingCost = selectedAddress != '' ? (selectedAddress?.state?.toLowerCase().includes('indonesia') ? (selectedAddress.province?.toLowerCase().includes('java') ? selectedShipping?.internal_price : selectedShipping?.external_price) : selectedShipping?.overseas_price) : selectedShipping?.internal_price || 0;

  const [isProccessing, setIsProccessing] = useState(false);
  const [success, setSuccess] = useState('');

  const handleOnsubmit = (e) => {
    e.preventDefault();
    setIsProccessing(true);
    http.post('/orders', {
      products: cart,
      user_id: globalState.user.id,
      address_id: selectedAddress.id,
      card_id: selectedCard,
      shipping_id: selectedShipping.id,
      total: totalPrice - totalDiscount + parseInt(shippingCost),
      status: 'onprogress',
    }, {
      headers: {
        'Authorization': `Bearer ${globalState.token}`,
      }
    })
      .then(({ data }) => {
        console.log(globalState.user);
        setSuccess('Order created successfully');
        // Reduce the stock of the purchased products in globalState
        const newProducts = globalState.products.map(product => {
          const cartItem = cart.find(item => item.id === product.id);
          if (cartItem) {
            return { ...product, stock: product.stock - cartItem.qty };
          } else {
            return product;
          }
        });
        const newState = { ...globalState, products: newProducts };
        newState.user.orders.push(data.order);
        setGlobalState(newState);
        setCart([]);
      })
      .catch(error => {
        setError(error.response?.data.message || error.message)
      })
      .finally(() => {
        setIsProccessing(false);
      });
  };

  return (
    <main className="py-3 bg-light">

      <div className="container">
        <h1>Cart</h1>
        <hr />
        {error && <ErrorMessage />}
        {success &&
          <div className="alert alert-success alert-dismissible fade show mb-3" role="alert">
            {success}
            <button type="button" className="btn-close" onClick={() => setSuccess('')}></button>
          </div>
        }

        <div className="row">
          <div className="col-12 col-md mb-3">
            {cart.length === 0 &&
              <div className="card">
                <div className="card-body">
                  <h3>Cart is Empty</h3>
                  <p>There are no items in your cart</p>
                  <div className="text-md-end">
                    <Link href={'/'} className="btn btn-primary">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            }
            {cart.map((item, i) => (
              <div className="card mb-3" key={i}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 col-lg-3 mb-3 m-md-0">
                      <img src={item.image || PlaceholderImage.src} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col">
                      <h3 className="m-0">{item.name}</h3>
                      <PriceLabel product={item} />
                      <p>Total : {toRupiah((item.price - item.discount) * item.qty)}</p>
                    </div>
                    {globalState.products != undefined && (
                      <AddToCart product={globalState.products.find(product => product.id === item.id)} className='col-12 col-lg-3'></AddToCart>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {globalState.user !== undefined &&
            <form onSubmit={handleOnsubmit} className="col-12 col-md-4 mb-3">
              <div className="card mb-3">
                <div className="card-body">
                  <h3>Shipping</h3>
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <select required className="form-select" name="address" id="address" defaultValue={selectedAddress} onChange={e => setSelectedAddress(globalState.user.addresses.find(address => address.id == e.target.value))}>
                      <option value={''} disabled>Select Address</option>
                      {globalState.user.addresses?.map((address, i) => (
                        <option value={address.id} key={i}>{address.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="option">Shipping Option</label>
                    <select required defaultValue={selectedShipping} className="form-select" name="option" id="option" onChange={e => setSelectedShipping(globalState.shippings.find(option => option.id == e.target.value))}>
                      <option value="" disabled>Select Option</option>
                      {globalState.shippings?.map((shipping, i) => (
                        <option key={i} value={shipping.id}>{shipping.name} - {
                          toRupiah(selectedAddress ? (selectedAddress.state?.toLowerCase().includes('indonesia') ? (selectedAddress.province?.toLowerCase().includes('java') ? shipping.internal_price : shipping.external_price) : shipping.overseas_price) : shipping.internal_price)
                        }</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="payment">Source of Funds</label>
                    <select defaultValue={selectedCard} className="form-select" name="payment" id="payment" required onChange={e => setSelectedCard(e.target.value)}>
                      <option value="">Select Card</option>
                      {globalState.user.cards?.map((card, i) => (
                        <option value={card.id} key={i}>{card.name} - {card.number}</option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h3>Overview</h3>
                  <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Total Price ( {countItems} items )
                      <span className="badge bg-primary">{toRupiah(totalPrice)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Total Discount
                      <span className="badge bg-primary">- {toRupiah(totalDiscount)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Shipping Cost
                      <span className="badge bg-primary">{toRupiah(shippingCost)}</span>
                    </li>
                  </ul>
                  <hr />
                  <p className="m-0">Grand Total :</p>
                  <h3 className="text-primary">{toRupiah(totalPrice - totalDiscount + parseInt(shippingCost))}</h3>
                  <hr />
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" disabled={cart.length === 0 || isProccessing}>
                      {isProccessing ? 'Proccessing...' : 'Buy'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          }
        </div>
      </div>

    </main>
  );
}

export default CartPage;