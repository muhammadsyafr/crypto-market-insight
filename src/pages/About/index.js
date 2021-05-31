import { React, useEffect, useState } from "libraries";

const About = () => {
    const [viewCoinCount, setViewCoinCount] = useState(50);
    useEffect(() => {
        // API.getCoin({ url: `${appConfig.url.api}/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=${viewCoinCount}&page=1&sparkline=false&price_change_percentage=24h%2C7d` })
        //     .then((res) => {
        //         console.log(res.axiosResponse.data)
        //     })
    }, [viewCoinCount])

    return (
        <>
          <h1>Hai</h1>
          <button onClick={()=> {setViewCoinCount(viewCoinCount + 10)}} >Click to change {viewCoinCount} </button>
        </>
    )

};

export default About;