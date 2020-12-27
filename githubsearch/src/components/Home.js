import { Component } from 'react';
import SearchBox from './Search/SearchBox';
import SearchResults from './Search/SearchResults';
import axios from 'axios';

class Home extends Component{
    state = {
        SearchQuery: "",
        SearchResults : []
    }

    getSearchQuery = (q) => {
        console.log("the serach query changed")
        this.setState({
            SearchQuery : q
        })
        this.getSearchResults()
    }

    getSearchResults(){
        var username = this.state.SearchQuery;
        axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            console.log("Serach results : ",res.data)
            this.setState({
                SearchResults: [res.data]
            })
        })
        .catch(error=>{
            if(error.response.status === "404"){
                this.setState({
                    SearchResults: []
                })    
            } else{
                this.setState({
                    SearchResults: []
                })    
            }
        })
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