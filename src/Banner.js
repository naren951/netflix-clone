import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import "./Banner.css"
const base_url = "http://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();

    }, [])
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path}`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name} </h1>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                <h1 className='banner_details'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner