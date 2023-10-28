import { Link } from "react-router-dom"
import Arrow  from "../assets/arrow.svg?react";
import Minus  from "../assets/minus.svg?react";
import Plus  from "../assets/plus.svg?react";
import { useEffect, useState } from "react";

const CartPage = () => {
    const [products, setProducts] = useState();
    const [totalPrice, setTotalprice] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        setProducts(cartItems);

        if (cartItems) {
            const priceTot = cartItems.reduce((acc, cur) => cur.quantity > 1? acc + cur.price * cur.quantity : acc + cur.price, 0);
    
            setTotalprice(priceTot);
        }
    }, [])

    function changeQuantity(button, id) {
        const value = button.value;
        let cart = JSON.parse(localStorage.getItem("cart"));
        const productIndex = cart.findIndex((product) => product.id === id);

        if (value === "plus") {
            cart[productIndex].quantity++;
            setProducts(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            if (cart[productIndex].quantity <= 1) {
                cart.splice(productIndex, 1);
                setProducts(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
            } else {
                cart[productIndex].quantity--;
                setProducts(cart);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }

        setTotalprice(cart.reduce((acc, cur) => cur.quantity > 1? acc + cur.price * cur.quantity : acc + cur.price, 0));
    }

  return (
    <main className="w-full">
        <nav className="w-full p-2 mb-4">
            <Link to="/" className="flex"><Arrow/></Link>
        </nav>
        <div className="flex flex-row justify-center gap-4 px-2">
            <div className="flex flex-col items-center mb-36 min-w-[316px] w-[570px]">
                { products ? products.map((product) => 
                    <div key={product.id} id={product.id} className="flex flex-row items-center justify-between w-full px-2 h-32 shadow-md rounded-md">
                        <img src={product.images[0]} className="productImage"/>
                        <div className="gap-4">
                            <p>{product.name}</p>
                            <p>R$:{product.price},00</p>
                            <div className="flex gap-3 justify-end">
                                <button className="quantityButon" value={"minus"} onClick={(target) => changeQuantity(target.currentTarget, product.id)}><Minus/></button>
                                <span>{product.quantity}</span>
                                <button className="quantityButon" value={"plus"} onClick={(target) => changeQuantity(target.currentTarget, product.id)}><Plus/></button>
                            </div>
                        </div>
                    </div>
                ) : <div className="text-red-500">Carrinho vazio</div>
                }
            </div>
            <div className="w-[375px] hidden md:flex md:h-[390px]  md:flex-col justify-between p-4 md:border rounded-lg">
                <p className="text-bold text-xl">Total: {totalPrice},00</p>
                <button disabled  className="buttonDisabled" >Comprar</button>        
            </div>
        </div>
        <div className="mobileButton">
            <p className="text-bold">Total: {totalPrice},00</p>
            <button disabled  className="buttonDisabled" >Comprar</button>
        </div>
    </main>
  )
}

export default CartPage