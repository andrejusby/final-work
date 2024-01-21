import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PostPage = ({animals}) => {

    const nav = useNavigate();

    const {id} = useParams();

    const animal = animals.find(x => x.id === Number(id))

  function name(params) {
    
  }

  return (
    <div>
      
    </div>
  )
}

export default PostPage;