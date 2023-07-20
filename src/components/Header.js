
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            {/*Top nav*/}
            <div className="flex items-center bg-green-600 p-1 flex-grow py-5">
                <div className="mt-1 mb-2 ml-4 mr-4 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src="/farm2.png"
                        width={180}
                        height={60}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/*search bar*/}
                <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-green-100 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 " type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/*Right*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>{session ? `Hello, ${session.user.name}` : 'Sign In'}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className=" relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-green-100 text-center rounded-full text-black text-bold">
                            {items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className=" hidden md:inline font-extrabold md:text-sm mt-4">Basket</p>
                    </div>
                </div>

            </div>

            {/*Bottom nav*/}
            <div className="flex items-center space-x-6 p-2 pt-5 pb-5 pl-6 bg-black text-white text-md ">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-6" />
                    All</p>
                <p className="link">FarmBlogs</p>
                <p className="link">Seeds</p>
                <p className="link">Rent Equipment</p>
                <p className="link hidden lg:inline-flex">Plants</p>
                <p className="link hidden lg:inline-flex">Send Gifts </p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>

            </div>
        </header>
    );
}

export default Header;
