import { Component } from 'react';
import SearchBox from './Search/SearchBox';
import SearchResults from './Search/SearchResults';

class Home extends Component{
    state = {
        SearchQuery: "",
        SearchResults : "this is it"
    }

    getSearchQuery = (q) => {
        this.setState({
            SearchQuery : q
        })
        this.getSearchResults()
    }

    getSearchResults(){
        console.log("getting serach results from github server")
    }

    render(){
        return (
            <div className='todo-app container'>
                <SearchBox getSearchQuery={this.getSearchQuery}/>
                <SearchResults results={this.state.SearchResults} />
            </div>
        )
    }
}

export default Home