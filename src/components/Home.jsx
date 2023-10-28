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
    <main>
        <Slider/>
        <CategorySlider setCategory={setCategory}/>
        { error ? <div className="flex h-36 items-center justify-center text-red-500">Error</div> 
        :
        <section className="mt-8 w-full">
          <div className="grid grid-cols-products justify-center w-full max-w-7xl">
            {loading? [...Array(16).keys()].map((i) => <SkeletonProduct key={i}/>) : data && data.map((product) => <ProductCard key={product.id} {...product}/>)}
          </div>
        </section>
        }
    </main>
  )
}

export default Home