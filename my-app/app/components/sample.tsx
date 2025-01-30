"use client"
import { APIEndpoint } from "../constants";


const Sample = () => {
    const callApi = () => {
        console.log(process.env.API_URL);
        console.log(process.env.NEXT_PUBLIC_API_URL);
        const headers = {
            'Access-Control-Allow-Origin': '*'
          };

        fetch(`${process.env.API_URL}/api/weatherforecast`,{ headers })
        .then(response => response.json())
        .then(data => console.log)
    };
    return ( <button  onClick={callApi}>Call Api</button> );
}
 
export default Sample;