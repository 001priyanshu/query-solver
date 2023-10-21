import React from 'react'
import { Link } from 'react-router-dom'

const SelectRole =  () => {
    return (
        <div id="container" className="bg-blue-300 flex items-center justify-center min-h-screen">
          
            <div className="bg-white rounded-lg p-8 shadow-md">
                <h1 className="text-3xl font-semibold mb-6 text-center text-blue-400">Select Your Role</h1>
                <div className="grid gap-4">

                    <Link to="/logincustomer"  className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-center font-medium px-6 py-3 rounded">
                        Customer
                    </Link>
                    <Link to="/loginagent" className="bg-green-500 hover:bg-green-600 cursor-pointer text-white text-center font-medium px-6 py-3 rounded">
                        Agent
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default SelectRole