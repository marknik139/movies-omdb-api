import React from "react"
import { Movies } from "../layout/Movies"
import { Preloader } from "./Preloader"
import { Search } from "./Search"

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state= {
        movies: [],
        loading: true
    }

    componentDidMount() {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type) => {
        this.setState({loading: true})
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${ type !== '' ? `&type=${type}` : '' }`
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => this.setState({movies: data.Search, loading: false}))
    }

    render(){
        const {movies, loading} = this.state;
        const {searchMovies} = this

        return (
            <main className="content container">
                <Search searchMovies={searchMovies}/>
                {
                    loading ? (
                        <Preloader/>
                    ) : (
                    <Movies movies={movies}/>
                    )
                }
            </main>
        )
    }
    
}

export { Main }