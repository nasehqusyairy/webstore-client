'use client'
import { useRootState } from '@/context/RootStateContext';
import PlaceholderImage from '@/img/product.jpg';
import { useState } from 'react';
import ProductCard from '@/components/productCard';

export default function HomePage() {

  const { globalState } = useRootState();

  const [products, setProducts] = useState(globalState.products || []);

  const productByCategory = (id) => setProducts(globalState.products.filter(product => product.category_id == id))

  return (
    <main className="pb-3 bg-light">

      <section className="bg-primary mb-3">
        <div className="container">
          <div className="row align-items-center py-3 rounded">
            <div className="col-12 col-md-8 mb-3">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  {globalState.sponsors?.map((sponsor, i) =>
                    <button key={sponsor.id} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className={i === 0 ? "active" : ''}></button>)}
                </div>
                <div className="carousel-inner">
                  {globalState.sponsors !== undefined ||
                    <div className="carousel-item">
                      <img src={PlaceholderImage.src} className="d-block w-100 rounded" alt="..." />
                    </div>
                  }
                  {globalState.sponsors?.map((sponsor, i) => (
                    <div className={"carousel-item" + (i === 0 ? ' active' : '')} key={i}>
                      <img src={sponsor.image} className="d-block w-100 rounded" alt="..." />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col 12 col-md-4 border-start">
              <img src={(globalState.sponsors ? globalState.sponsors[globalState.sponsors.length - 1]?.image : PlaceholderImage.src) || PlaceholderImage.src} alt="" className="img-fluid rounded mb-3" />
              <img src={(globalState.sponsors ? globalState.sponsors[globalState.sponsors.length - 2]?.image : PlaceholderImage.src) || PlaceholderImage.src} alt="" className="img-fluid rounded mb-3" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row flex-nowrap overflow-auto mb-3">
            {globalState.categories?.map((category, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card text-primary border-primary">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col border-end">
                        <h3>{category.name}</h3>
                        <button onClick={() => productByCategory(category.id)} className='btn btn-link'>Show</button>
                      </div>
                      <div className="col-4 text-center">
                        <h1 className="bi bi-tv"></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {products.map((product, i) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3" key={i}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}