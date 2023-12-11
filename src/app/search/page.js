'use client'
import ProductCard from "@/components/productCard";
import { useRootState } from "@/context/RootStateContext";
import { useState } from "react";

export default function SearchPage() {

  const { globalState } = useRootState()
  const [term, setTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <main className="py-3 bg-light">
      <section>
        <div className="container">
          <div className="card mb-3">
            <div className="card-body">
              <form className="input-group">
                <select name="category" id="category" className="form-select" onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="0">All Categories</option>
                  {globalState.categories?.map((category, i) => <option key={i} value={category.id}>{category.name}</option>)}
                </select>
                <input value={term} onChange={(e) => setTerm(e.target.value)} type="search" name="search" id="search" className="form-control" placeholder="Type to search..." />
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {globalState.products?.filter((product) => {
              if (selectedCategory == 0) {
                return product.name.toLowerCase().includes(term.toLowerCase());
              } else {
                return product.name.toLowerCase().includes(term.toLowerCase()) && product.category.id == selectedCategory;
              }
            }).map((product, i) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3" key={i}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}