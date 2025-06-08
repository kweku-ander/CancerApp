import React, { useState } from "react";


const Onboarding = () => {
    const [username, setUsername] = useState("");
    const handleUsername = (e) =>{
        setUsername(e.target.value)
    };
    const [age, setAge] = useState("");
    const handleAge = (e) =>{
        setAge(e.target.value)
    };
    const [location, setLocation] = useState("");
    const handleLocation = (e) =>{
        setLocation(e.target.value)
    };
    const handleOnboarding = async(e) =>{
        e.preventDefault();

        console.log(username, age, location);
    }

    return(
        <div className="flex min-h-screen items-center justify-center bg-[#13131a] ">
            <div className="w-full max-w-md rounded-xl bg-[#1c1c24] p-8 shadow-lg ">
                <h2 className="mb-2 text-center text-5xl font-bold ">👋</h2>
                <h2 className="mb-6 text-center text-2xl font-bold text-white">
                    {" "}
                    Welcome!, Let's get started
                </h2>

                <form onSubmit={handleOnboarding}>
                    <div className="mb-4">
                        <label htmlFor="username" className="mb-2 text-sm text-gray-300">
                            Username
                        </label>
                        <input type="text" id="username" value={username} onChange={handleUsername}
                        onClick={(e) => setUsername(e.target.value)}
                        required
                        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="mb-2 text-sm text-gray-300">
                            Age
                        </label>
                        <input type="number" id="age" value={age} onChange={handleAge}
                        onClick={(e) => setAge(e.target.value)}
                        required
                        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="mb-2 text-sm text-gray-300">
                            Location
                        </label>
                        <input type="text" id="username" value={location} onChange={handleLocation}
                        onClick={(e) => setLocation(e.target.value)}
                        required
                        className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-neutral-400 focus:outline-none"
                        />
                    </div>
                    <button type="submit" className="mt-4 w-full rounded-lg bg-green-600 py-3 font-semibold
                     hover:bg-green-700 focus:outline-none text-white focus:ring-2 focus:ring-blue-600">
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    )
};


export default Onboarding;