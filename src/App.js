
import React from "react"
import './App.css';
import postServis from "./component/Api/postServis";
import { usePosts } from "./component/Hook/usePosts";
import PostForm from "./component/PostForm";
import PostItem from "./component/PostItem";
import Button from "./component/UI/Button";
import Input from "./component/UI/Input";
import Mmodule from "./component/UI/Mmodule";
import PostFilter from "./component/UI/PostFilter";
import Select from "./component/UI/Select";


function App() {

  const [posts, setPosts] = React.useState([])
  const [filter, setFilter] = React.useState({ sort: "", query: "" })
  const [modul, setModule] = React.useState(false)
  const [loader, setLoader] = React.useState(false)
  const sortedSerchPosts = usePosts(posts, filter.sort, filter.query)

  React.useEffect(() => {
    fethPosts()
  }, [])

  async function fethPosts() {
    setLoader(true)
    const posts = await postServis.getApi()
    setPosts(posts)
    setLoader(false)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModule(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Button style={{ marginTop: "40px" }} onClick={() => setModule(true)}>Добвить новую запись</Button>
      <Mmodule visible={modul} setVisible={setModule}>
        <PostForm create={createPost} />
      </Mmodule>
      <hr style={{ marginTop: "40px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {loader
        ? <h1 style={{ textAlign: "center" }}>Идет загрузка..</h1>
        : <PostItem remove={removePost} posts={sortedSerchPosts} title="список постов" />
      }

    </div>
  );
}

export default App;
