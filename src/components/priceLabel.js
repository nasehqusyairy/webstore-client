function PriceLabel({ product }) {
  return (<p className="card-text">Rp. {product.discount ? <span><del>{product.price}</del> {product.price - product.discount}</span> : product.price}</p>);
}

export default PriceLabel;