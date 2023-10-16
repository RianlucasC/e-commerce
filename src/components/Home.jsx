import { useEffect, useState } from "react";
import CategorySlider from "./CategorySlider";
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import useFetch from "../Hooks/useFetch";
import SkeletonProduct from "./SkeletonProduct";

const Home = () => {
  const [category, setCategory] = useState(null);
  const {data, loading, error, request} = useFetch();

  useEffect(() => {
    async function fetchData() {
       await request(`http://localhost:5000/products${category? `/?category=${category}`: ""}`, {});
    }

    fetchData();

  }, [category])

  return (
    <main className="w-screen">
        <Slider/>
        <CategorySlider setCategory={setCategory}/>
        <section className="flex justify-center mt-8 w-screen">
          <div className="grid grid-cols-products w-full max-w-7xl">
              {loading? [...Array(16).keys()].map((i) => <SkeletonProduct key={i}/>) : data && data.map((product) => <ProductCard key={product.id} {...product}/>)}
            </div>
        </section>
    </main>
  )
}

export default Home