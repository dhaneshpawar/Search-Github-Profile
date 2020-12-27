import { Component } from 'react';

class UserList extends Component{
    componentDidMount(){
       this.getUsers(); 
    }

    state = {
        content: []
    }

    getUsers = ()=>{
        var retrievedObject = localStorage.getItem('urlsOfSavedUser');
        if(retrievedObject){
            var retrievedObjectArray = JSON.parse(retrievedObject);
            this.setState({
                content : retrievedObjectArray
            })              
        } else{
            this.setState({
                content : []
            })    
        }
    }

    deleteUser = (url) => {
        console.log("user saved to local : ",url)
        var retrievedObject = localStorage.getItem('urlsOfSavedUser');
        if(retrievedObject){
            var retrievedObjectArray = JSON.parse(retrievedObject);
            console.log("the array : ",retrievedObjectArray)
            var isExist = retrievedObjectArray.filter((obj)=>{
                return obj.url !== url;
            })
            localStorage.setItem('urlsOfSavedUser', JSON.stringify(isExist));
            this.setState({
                content : isExist
            })              
            alert("User deleted succesfully !")
        }
    }

    render(){
        const content = this.state.content
        const resultsList = content.length ? 
        (
            content.map(user=>{
                return (
                <div className="card blue-grey darken-1" key={user.id}>
                    <div className="card-content white-text">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src={user.avatar_url}  alt="" className="circle responsive-img"/> 
                        </div>
                        
                        <div className="col s10">
                            <span className="card-title">{user.name}</span>
                        </div>
                    </div>
                        
                        <p>Username : {user.login}</p>
                        <p>Bio : {user.bio}</p>
                        <br/>
                        <p>Followers : {user.followers}</p>
                        <p>Following : {user.following}</p>
                        <br/>
                        <p>Total Public Repos : {user.public_repos}</p>
                        <p>Location : {user.location}</p>
                    </div>
                    
                    <div className="card-action">
                        <div className='right'>
                        <a href="#" onClick={() => this.deleteUser(user.url)}>Delete User</a>
                        <a target='_blank' href={user.html_url}>Visit Profile on Github</a>
                        </div>
                        <br/>
                    </div>
                </div>
                )
            })
        ) : 
        (
            <div className='center'><br/><br/> No saved users <br/><br/></div>
        );

        return(
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        {resultsList}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList