import React from 'react'
import Button from './UI/Button'

const PostList = (props) => {
   return (
      <div className="post">
         <div className="post__content">
            <strong>{props.number}.{props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
         </div>
         <div className="post_btn">
            <Button onClick={() => props.remove(props.post)}>Удалить</Button>
         </div>
      </div>
   )
}

export default PostList
