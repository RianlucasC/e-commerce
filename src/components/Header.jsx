import { Link } from "react-router-dom";
import Search  from "../assets/search.svg?react";
import ShoppingCart from "../assets/shopping-cart.svg?react";
import User from "../assets/user.svg?react";

const Header = () => {
  return (
    <header>
        <nav className="flex justify-end gap-8 items-center h-14 w-full px-4 shadow">
            <div className="relative">
                <Search className="absolute top-3 left-3"/>
                <input type="text" placeholder="Search items..." className="bg-[#FBF3F3] w-52 pl-9 py-2.5 text-xs border border-[#E4E0E0] rounded-md"/>
            </div>
            <Link to="cart">
                <ShoppingCart/>
            </Link>
            <Link to="">
                <User/>
            </Link>
        </nav>
    </header>
  )
}

export default Header