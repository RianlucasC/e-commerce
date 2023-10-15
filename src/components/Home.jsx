import { useEffect, useState } from "react";
import CategorySlider from "./CategorySlider";
import Slider from "./Slider";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then((res) => res.json())
    .then((json) => setProducts(json)).catch((err) => console.log(err));

    console.log(products)
  }, [])

  console.log(products)

  return (
    <main className="w-screen">
        <Slider/>
        <CategorySlider/>
        <section className="flex justify-center mt-8 w-screen">
          <div className="grid grid-cols-products w-full max-w-7xl">
              {products && products.map((product) => <ProductCard key={product.id} {...product}/>)}
            </div>
        </section>
    </main>
  )
}

export default Home