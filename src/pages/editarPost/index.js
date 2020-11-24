import React, {useState, useEffect}  from 'react';
import Nav from '../../assets/components/nav';
import apiMock from '../../services/MockAPIs/posts-no-header';
//import api from '../../services/api';


function PostEdit(){
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  useEffect(()=>{
    apiMock.put('posts/1',)
  },[])


  return(
    <div id="postEdit">
      <Nav/>
      <textarea></textarea>
    </div>
  )
}

export default PostEdit;