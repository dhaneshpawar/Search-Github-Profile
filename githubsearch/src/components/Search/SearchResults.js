import { Component } from 'react';

class SearchResults extends Component{
    state = {
        content: this.props.results
    }

    saveUser = (e) => {
        console.log("user save to local")
    }

    render(){
        return(
            <div>
                {this.state.content}
            </div>
        )
    }
}

export default  SearchResults;