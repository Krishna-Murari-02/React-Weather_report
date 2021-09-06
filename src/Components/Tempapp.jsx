import React, { useEffect, useState } from 'react';
import '../Css/Style.css';

const Tempapp = () => {
    // https://api.openweathermap.org/data/2.5/weather?q={puna}&appid={15ae387d1655406b4834f5726b1a3862}

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")
    const [date, setDate] = useState("Today")
    const [time, setTime] = useState("00:00:00")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=15ae387d1655406b4834f5726b1a3862`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            // console.log(resJson.main.temp)
            setCity(resJson.main)
            let currentdate = new Date();
            let ourDate = currentdate.getDate()+"/"+ currentdate.getMonth()+"/"+currentdate.getFullYear() ;
            setDate(ourDate)
            let time = currentdate.getHours()+":"+ currentdate.getMinutes()+":"+currentdate.getSeconds() ;

            setTime(time)
            
            // console.log(currentdate.getDate())
            // console.log(currentdate.getMonth())
            // console.log(currentdate.getFullYear())
            // console.log(currentdate.getHours())
            // console.log(currentdate.getMinutes())
            // console.log(currentdate.getSeconds())
            // // 
        }
        fetchApi();
    }, [search])
    return (
        <>

            <div className="nav">Search With Country Name</div>
            <div className="container">
                <div className="header">
                    <input className='search' value={search} type="search" onChange={(event) => {
                        setSearch(event.target.value)

                    }} />

                    {!city ? (
                        <p>NO Data Found</p>
                    ) : (
                        <div className="normal">
                            <h1 className="location">Weather Report</h1>
                            <strong><i className="country">{search}</i></strong>
                            <h3 className="tem">{city.temp}°C</h3>
                            <small className="date">max-temp {city.temp_max}°C : min-temp {city.temp_min}°C</small>
                            <h6>{date}</h6>
                            <h6>{time}</h6>
                            
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}
export default Tempapp;