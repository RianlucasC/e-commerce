import { Link } from "react-router-dom";
import Search  from "../assets/search.svg?react";
import ShoppingCart from "../assets/shopping-cart.svg?react";
import User from "../assets/user.svg?react";

const Header = ({ countitemscart }) => {

  return (
    <header>
        <nav className="flex justify-end gap-8 items-center h-14 w-full px-4 shadow">
            <div className="relative">
                <Search className="absolute top-3 left-3"/>
                <input type="text" placeholder="Search items..." className="bg-[#FBF3F3] w-52 pl-9 py-2.5 text-xs border border-[#E4E0E0] rounded-md"/>
            </div>
            <Link to="cart" className="relative">
                <ShoppingCart/>
                {countitemscart !== 0? <span className="w-4 text-center rounded-lg -top-2 left-4 text-xs text-white bg-red-600 absolute">{countitemscart}</span>: ""}
            </Link>
            <Link to="">
                <User/>
            </Link>
        </nav>
    </header>
  )
}

export default Header