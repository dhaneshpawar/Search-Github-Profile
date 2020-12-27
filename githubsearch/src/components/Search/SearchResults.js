import { Component } from 'react';

class SearchResults extends Component{
    state = {
        content: this.props.results
    }

    saveUser = (user) => {
        console.log("user saved to local : ",user)
        var retrievedObject = localStorage.getItem('urlsOfSavedUser');
        if(retrievedObject){
            var retrievedObjectArray = JSON.parse(retrievedObject);
            console.log("the array : ",retrievedObjectArray)
            var isExist = false;
            retrievedObjectArray.forEach(obj => {
                if(obj.url === user.url){
                    isExist = true;
                }
            });

            if(!isExist){
                alert("user Saved Successfully!")
                retrievedObjectArray.push(user);
                localStorage.setItem('urlsOfSavedUser', JSON.stringify(retrievedObjectArray));
            }
            else{
                alert("user Already Saved !")
                console.log("already exists")
            }
        } else{
            let users = [user];
            localStorage.setItem('urlsOfSavedUser', JSON.stringify(users));
            alert("user Saved Successfully!")
        }
    }

    render(){
        const content = this.props.results
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
                        <a href="#" onClick={() => this.saveUser(user)}>Save User</a>
                        <a target='_blank' href={user.html_url}>Visit Profile on Github</a>
                        </div>
                        <br/>
                    </div>
                </div>
                )
            })
        ) : 
        (
            <div className='center'>No data found, Try searching something else...</div>
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

export default  SearchResults;