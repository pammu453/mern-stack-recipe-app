import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContest'

const Banner = () => {
    const { user } = useContext(StoreContext)
    return (
        <section className="flex-1 pt-20 pb-20 bg-gray-900 text-white flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Discover Delicious Recipes</h1>
                <p className="text-lg mb-8">Cooking made easy with our collection of mouth-watering recipes</p>
                <div className="flex justify-center">
                    <Link to="/recipes" className="bg-green-500 text-white px-6 py-3 rounded-md mr-4">See Recipes</Link>
                    {user ? (
                        <Link to="/add-recipes" className="bg-blue-500 text-white px-6 py-3 rounded-md">Add Recipes</Link>

                    ) : (
                        <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-md" >Login to Add Recipes</Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Banner
