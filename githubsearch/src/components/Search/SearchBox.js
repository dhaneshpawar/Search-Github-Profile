import { Component } from 'react';

class SearchBox extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.content){
            this.props.getSearchQuery(this.state.content);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter the Search Query</label>
                    <input type="text" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default  SearchBox;