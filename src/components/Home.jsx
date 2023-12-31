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
       await request(`https://rianapiecommerce.onrender.com/products${category? `/?category=${category}`: ""}`, {});
    }

    fetchData();

  }, [category])

  return (
    <main>
        <Slider/>
        <CategorySlider setCategory={setCategory}/>
        { error ? <div className="flex h-36 items-center justify-center text-red-500">Error</div> 
        :
        <div className="flex justify-center w-full">
          <section className="mt-8 w-full max-w-5xl">
          <div className="grid grid-cols-products justify-center w-full max-w-7xl">
            {loading? [...Array(16).keys()].map((i) => <SkeletonProduct key={i}/>) : data && data.map((product) => <ProductCard key={product.id} {...product}/>)}
          </div>
        </section>
        </div>
        }
    </main>
  )
}

export default Home