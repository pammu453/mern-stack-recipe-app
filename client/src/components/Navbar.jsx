import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbBowlSpoon } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";
import { StoreContext } from '../context/StoreContest';

const Navbar = () => {
    const { user, logout } = useContext(StoreContext)
    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="font-bold text-xl flex gap-2">
                        <TbBowlSpoon />
                        <ImSpoonKnife />
                    </Link>
                    <div className="flex space-x-3">
                        {!user ? (
                            <>
                                <Link to="/" className="hover:text-gray-300">Home</Link>
                                <Link to="/recipes" className="hover:text-gray-300">Recipes</Link>
                                <Link to="/login" className="hover:text-gray-300">Login</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" className="hover:text-gray-300 hidden md:inline-block">Home</Link>
                                <Link to="/recipes" className="hover:text-gray-300">Recipes</Link>
                                <Link to="/add-recipes" className="hover:text-gray-300">Add Recipes</Link>
                                <p className="hover:text-gray-300 md:inline-block">
                                    <div className='flex gap-1 items-center'>
                                        <span>
                                            {user.coin}
                                        </span>
                                        <GiTwoCoins className='text-orange-300 text-xl font-bold' />
                                    </div>
                                </p>
                                <p className="hover:text-gray-300 flex items-center">
                                    <img src={user.photoURL} alt="User" className="w-6 h-6 rounded-full mr-2 hidden sm:inline-block" />
                                    <span className='hidden md:inline-block'>
                                        {user.displayName}
                                    </span>
                                </p>
                                <button onClick={() => logout()}>
                                    <IoIosLogOut className='text-xl font-bold' />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
