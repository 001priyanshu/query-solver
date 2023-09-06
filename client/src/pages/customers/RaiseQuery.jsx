import React, { useEffect } from 'react'
import { ChatState } from '../../context/chatContext'
import { raiseQuery } from '../../actions/chat';
import { useNavigate } from 'react-router-dom';

const RaiseQuery = () => {

    const { user, setSelectedChat } = ChatState();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await raiseQuery(user?.userId, user?._id);
            setSelectedChat(response?.fullChat);
            // will add this later
            navigate('/customerchatbox') 

            
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div id="container" className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg p-8 shadow-md">
                <div onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-center font-medium px-6 py-3 rounded">
                    Raise Query
                </div>
            </div>
        </div>
    )
}

export default RaiseQuery