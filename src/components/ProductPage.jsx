import { Link, useParams, useNavigate } from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import { useEffect, useState } from "react";
import Arrow  from "../assets/arrow.svg?react";
import Truck  from "../assets/truck.svg?react";
import ImagesSlider from "./ImagesSlider";
import ProductPageSkeleton from "./ProductPageSkeleton";

const ProductPage = () => {
    const {productId} = useParams();
    const [imageMain, setImageMain] = useState();
    const {data, loading, error, request} = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            await request(`https://rianapiecommerce.onrender.com/products/${productId}`); 
        }

        fetchData();
        
    },[]);

    function addProductToCart() {
        let cart = localStorage.getItem("cart");

        if (cart) {
            let cartArray = JSON.parse(cart);
            
            const productExist = cartArray.findIndex((product) => product.id === productId);
            let {_id: id, name, price, images} = data;

            if (productExist === -1) {
                cartArray.push({id, name, price,images, quantity: 1});
            } else {
                cartArray[productExist].quantity += 1;
            }

            localStorage.setItem("cart", JSON.stringify(cartArray));

        }else {
            let {_id: id, name, price, images} = data;
            localStorage.setItem("cart", JSON.stringify([{id, name, price,images, quantity: 1}]));
        }

        navigate('/cart');
    }

    return (
        <main className="flex flex-col">
            <nav className="w-full p-2 mb-4">
                <Link to="/" className="flex"><Arrow/></Link>
            </nav>
            {data ?  <>
                <section className="w-full mb-8 flex flex-col items-center md:flex-row md:justify-center">
                    <div className="w-[375px] h-[390px] flex flex-col items-center justify-between">
                        <img src={imageMain? imageMain : data.images[1]} alt={data.name} className="bg-cover min-w-[300px] w-4/5 min-h-[300px]"/>
                        <ImagesSlider images={data.images} setImageMain={setImageMain}/>
                    </div>
                    <div className="w-[375px] md:h-[390px] flex flex-col justify-between p-4 md:border rounded-lg">
                        <div className="flex flex-col gap-4">
                            <p className="text-lg">{data.name}</p>
                            <p className="text-3xl font-bold">R$ {data.price},99</p>
                            <div className="flex">
                                <Truck/> <p className="text-[#01A971] pl-4">Frete grátis para todo Brasil!</p>
                            </div>
                            <p className="text-[#01A971]">Parcelamento até 12x no cartão!</p>
                        </div>
                        <button className="buttonActive hidden md:block" onClick={addProductToCart}>Adicionar ao carrinho</button>
                    </div>
                </section> 
                <div className="w-full bg-[#f1f0f0] py-8 px-8 md:px-24">
                    <h2 className="text-bold text-2xl my-4">Descrição</h2>
                    <ul>
                        {data.description.map((item, id) => <li key={id} className="my-2">{item}</li>) }
                    </ul>
                </div>
                <div className="mobileButton">
                    <button className="buttonActive" onClick={addProductToCart}>Adicionar ao carrinho</button>
                </div>
            </>
            : <ProductPageSkeleton/> 
            } 
        </main>
        
    )
}

export default ProductPage

/*
{data && <>
                <section className="w-full mb-8 flex flex-col items-center md:flex-row md:justify-center">
                    <div className="w-[375px] h-[390px] flex flex-col items-center justify-between">
                        <img src={imageMain? imageMain : data.images[1]} alt={data.name} className="bg-cover min-w-[300px] w-4/5 min-h-[300px]"/>
                        <ImagesSlider images={data.images} setImageMain={setImageMain}/>
                    </div>
                    <div className="w-[375px] md:h-[390px] flex flex-col justify-between p-4 md:border rounded-lg">
                        <div className="flex flex-col gap-4">
                            <p className="text-lg">{data.name}</p>
                            <p className="text-3xl font-bold">R$ {data.price},99</p>
                            <div className="flex">
                                <Truck/> <p className="text-[#01A971] pl-4">Frete grátis para todo Brasil!</p>
                            </div>
                            <p className="text-[#01A971]">Parcelamento até 12x no cartão!</p>
                        </div>
                        <button className="buttonActive hidden md:block" onClick={addProductToCart}>Adicionar ao carrinho</button>
                    </div>
                </section> 
                <div className="w-full bg-[#f1f0f0] py-8 px-8 md:px-24">
                    <h2 className="text-bold text-2xl my-4">Descrição</h2>
                    <ul>
                        {data.description.map((item, id) => <li key={id} className="my-2">{item}</li>) }
                    </ul>
                </div>
                <div className="mobileButton">
                    <button className="buttonActive" onClick={addProductToCart}>Adicionar ao carrinho</button>
                </div>
            </>
            }
*/