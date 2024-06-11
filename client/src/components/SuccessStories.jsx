import React, { useState } from 'react'
import CountUp from 'react-countup';
import axios from 'axios'

const SuccessStories = () => {
    const [userCount, setUserCount] = useState(0);
    const [recipeCount, setRecipeCount] = useState(0);

    const count = async () => {
        const response = await axios.get(`/api/count`)
        setUserCount(response.data.totalUsers)
        setRecipeCount(response.data.totalRecipes)
    }

    count();

    return (
        <div>
            <section className="bg-gray-800 text-white py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
                    <div className="flex justify-around">
                        <div>
                            <CountUp end={userCount} duration={3} className="text-5xl font-bold" />
                            <p className="text-lg">User Created</p>
                        </div>
                        <div>
                            <CountUp end={recipeCount} duration={3} className="text-5xl font-bold" />
                            <p className="text-lg">Recipe Created</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SuccessStories
