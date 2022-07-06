import "./App.css";
import { useGetAllPostQuery,useGetPostByIdQuery  ,useGetPostByLimitQuery , useDeletePostMutation,useCreatePostMutation , useUpdatePostMutation  } from "./services/post";

function App() {
  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(4)
  // const responseInfo = useGetPostByLimitQuery(5)
  // const [deletePost , responseInfo] = useDeletePostMutation()
  // const [createPost , responseInfo] = useCreatePostMutation()
  const [updatePost, responseInfo] = useUpdatePostMutation()


  const newPost = {
    title: 'This is new Title',
    body: 'This is new body',
    userId: 1,
  }
  const updatePostData = {
    id: 1,
    title: 'This is Update Post Title',
    body: 'This is Update Post Body',
    userId: 1,
  }


  // console.log("Response Information :", responseInfo);
  // console.log("Data:", responseInfo.data);
  // console.log("Success:", responseInfo.isSuccess);

  if (responseInfo.isLoading) return <div>Loading....</div>;
  if (responseInfo.isError)
    return <h1>An Error Occured{responseInfo.error.error}</h1>;

  return (
    //Get All Data
    // <div className="App">
    //  <h1>RTK-QUERY(GET ALL DATA)</h1>
    //  {
    //   responseInfo.data.map((post , i)=>
    //   <div key={i}>
    //        <h2>{post.id}:{post.title}</h2>
    //        <p>{post.body}</p>
    //        <hr />
            
    //         </div>
    //  )
    //  }
    // </div>
    //getpostbyid(get single data)
    // <div className="App">
    //   <h2>RTK-QUERY(SINGLE DATA)</h2>
    //   <h2>{responseInfo.data.id} :{responseInfo.data.title}</h2>
    //   <p>{responseInfo.data.body}</p>


    // </div>

    //GETDATABYLIMIT
  //  <div className="App">
  //   <h1>RTK-QUERY(GET LIMITED DATA)</h1>
  //   {
  //     responseInfo.data.map((post , i)=>
  //     <div key={i}>
  //     <h2>{post.id}: {post.title}</h2>
  //     <p>{post.body}</p>
  //     <hr />
  //     </div>
  //    )
  //   }
  //  </div>
  //delete data
  // <div className="App">
  //   <h1>RTK-QUERY(DELETE DATA)</h1>
  //   <button onClick={()=>{deletePost(3)}}>deletepost</button>

  // </div>

  //Create Data
  // <div className="App">
  //   <h1>RTK-QUERY(CREATE DATA)</h1>
  //   <button onClick={()=>{createPost(newPost)}}>createpost</button>

  // </div>

  //update post 
  // Update Data
  <div className="App">
    <h1>Redux Toolkit - RTK Query (Update Data)</h1>
    <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
  </div>
  );
}

export default App;
