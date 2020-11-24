import React, {Component} from 'react';
import apiMock from '../../services/MockAPIs/amargo';
import Nav from '../../assets/components/nav';
//import api from '../../services/api';

class UserDetails extends Component{
  constructor(props){
    super(props)
    this.state ={
      user: {
        "username": "Loading",
        "email": "Loading"
      },
      posts: []
    }
  }

  async componentDidMount(){
    /*await api.get(`users/${params.id}`,
    {headers: {'Authorization': `${localStorage.getItem("token")}`}})
      .then(response=>{
        this.setState({posts: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })*/
      await apiMock.get()
      .then(response=>{
        this.setState({user: response.data, posts: response.data.posts});        
        console.log(JSON.stringify(response.data))
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      });
     // console.log(this.state.posts)
  }
  render(){  
    
    return (
      <div>
        <Nav/>
        <h1>{this.state.user.username}</h1>
        <p>{this.state.user.email}</p>
        <table>
          <tr>
            <th>Post</th>
            <th>Crado em:</th>
            <th>Modificado em:</th>
          </tr>
          {this.state.posts.map(post=>{
            return(
              <tr>
                <th>{post.content}</th>
                <th>{post.created_at}</th>
                <th>{post.updated_at}</th>
              </tr>
            )
           })
          }
        </table>
      </div>
    )
  }
}

export default UserDetails;