import React from 'react'
import Likebutton from './likebutton'

function Postcard({props}) {

  
  return (
    <div className='card'>
      {props.map((data)=>(
        <div key={data.id}>
            <img src={data.profileImage}/>
            <h2>{data.username}</h2>
            <h2>{data.content}</h2>
            <Likebutton props={data.isLiked}/>
        </div>
      ))}
    </div>
  )
}

export default Postcard
