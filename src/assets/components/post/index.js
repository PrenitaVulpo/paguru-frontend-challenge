import React, {Component} from 'react';


class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      "id": 0,
      "author_name": "Loading",
      "content": "Loading",
      "created_at": "Loading",
      "updated_at": "Loading",
      "data_cria": "sem data",
      "hora_cria": "sem hora",
      "data_mod": "sem data",
      "hora_mod": "sem hora",
    };
  }
  
  render(){
    //<p>Criado em {this.state.data_cria } às {this.state.hora_cria}</p>
    //
    return(
    <div id="post">
      <h1>{this.props.post.author_name}</h1>
      <p>{this.props.post.content}</p>
    </div>
    )
  }
  
}

export default Post;