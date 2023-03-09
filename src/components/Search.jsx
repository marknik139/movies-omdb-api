import React from "react";

class Search extends React.Component {

    state = {
        search: 'terminator',
        filter: ''
    }

    handleKey = (event) => {
        if (event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.filter)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.filter)
        })
    }

    render(){

        const {search, filter} = this.state
        const {handleKey} = this

        return (
            <div className="row">
                <div className="input-field">
                    <input 
                        className="validate"
                        placeholder="search" 
                        type="search"
                        value={search} 
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={handleKey}
                     />
                    <button 
                        className="btn search-btn brown lighten-2" 
                        onClick={() => this.props.searchMovies(this.state.search, this.state.filter)}>Search
                    </button>
                </div>
                <div className="filters">
                    <label>
                        <input
                            name="filter" 
                            type="radio" 
                            checked={filter === ''}
                            value=''
                            onChange={this.handleFilter} 
                            />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            name="filter" 
                            type="radio" 
                            value='movie'
                            onChange={this.handleFilter} 
                            />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input 
                            name="filter" 
                            type="radio" 
                            value='series'
                            onChange={this.handleFilter} 
                            />
                         <span>Series</span>
                    </label>
                </div>
            </div>
        )
    }
}

export {Search}