import React, {useState, useEffect} from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading ,setLoading] = useState(true);
   
    
    const seacrhMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search)
            setLoading(false)
        })
    }

    useEffect(()=> {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search) 
                setLoading(false)
            })
            console.log(API_KEY)
    },[])
    
        return <main className="container content">
            <Search seacrhMovies={seacrhMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
}

export {Main}