import React, {Component} from 'react';
import apiMock from '../../services/MockAPIs/ListUsers';
import User from '../../assets/components/user';
import Nav from '../../assets/components/nav/index';
import {Link} from 'react-router-dom';

class ListUsers extends Component{
  constructor(props){
    super(props)
    this.state ={
      users: [
        {"username": "Loading",
        "email": "Loading"}
      ]
    }
  }

  async componentDidMount(){
    console.log(localStorage.getItem("token"));
    /*await api.get('posts',
    {headers: {'Authorization': `${localStorage.getItem("token")}`}})
      .then(response=>{
        this.setState({posts: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })*/
    await apiMock.get()
      .then(response=>{
        this.setState({users: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      });
  }
  render(){  
    return (
      <>
        <Nav />
        <div className="container" >
          <div className="row" >
            <div className="col s12 m8 offset-m2">
              <div className="card">
                <div className="card-content">
                  <div className="center-align">
                    <h4>Usuários</h4>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map(user => {
                        return (
                          <tr>
                            <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
                            <td>{user.email}</td>
                          </tr>
                        )
                      })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      </>
    )
  }
}

export default ListUsers;