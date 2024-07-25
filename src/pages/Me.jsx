import { useEffect, useState } from "react";
import axios from "axios";

const Me = () => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [meData, setMeData] = useState(null);

    const requestMeData = async () => {
        try{
            const response = await axios.get(`${API_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMeData(response.data);
            //console.log(meData);
        }catch(error){
            console.log('An error ocurred', error);
        }
    }

    useEffect(() => {
        requestMeData();
    }, []);

    return (
        <>
            <h1>My information</h1>

            <p>
                {JSON.stringify(meData)}
            </p>
        </>
    )

}

export default Me;