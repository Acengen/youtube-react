import React from 'react';
import './Searchbar.css'

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    handelSubmit = (e) => {
        e.preventDefault();
        
        this.props.search(this.state.term)
    }

    handelChange = (e) => {

        this.setState({
            term: e.target.value
        })

    }

    render() {
        return(
            <div>
                <form className="myForm" onSubmit={this.handelSubmit}>
                    <label htmlFor="search">Video Search</label>
                    <input type="text" id="search" value={this.state.term} onChange={this.handelChange} placeholder='search for videos'/>
                </form>
            </div>
        )
    }
}

export default SearchBar;