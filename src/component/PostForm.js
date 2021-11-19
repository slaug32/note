import React from 'react'
import Button from "./UI/Button";
import Input from "./UI/Input";

const PostForm = ({ create }) => {

   const [post, setPost] = React.useState({ title: "", body: "" })

   const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
         ...post,
         id: Date.now()
      }
      create(newPost)
      setPost({ title: "", body: "" })
   }

   return (
      <form>
         <Input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="название" />
         <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="описание" />
         <Button onClick={addNewPost}>Добавить</Button>
      </form>
   )
}

export default PostForm
