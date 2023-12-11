import PlaceholderImage from '@/img/product.jpg'
import Link from "next/link";
import AddToCart from "./addToCart";
import PriceLabel from "./priceLabel";
import { useRootState } from '@/context/RootStateContext';

function ProductCard({ product }) {
  const { globalState } = useRootState()
  return (
    <div className="card">
      <img src={product.image || PlaceholderImage.src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="d-flex justify-content-between">
          <span className="card-title m-0">{product.name}</span>
          {product.discount > 0 && <span className="badge text-bg-primary">{Math.round(product.discount / product.price * 100)}% Off</span>}
        </h5>
        <PriceLabel product={product} />
        {globalState.user ?
          <AddToCart product={product}></AddToCart> :
          <Link className='btn btn-primary' href={'/auth'}>Add to cart</Link>
        }
      </div>
    </div>
  );
}

export default ProductCard;