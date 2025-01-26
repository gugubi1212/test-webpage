import {  useEffect, useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import FlyoutLink from "./FlyOutLink";
import FlyoutContent from "./FlyoutContent";




const Home = () => {
  const [posts, setPosts] = useState([]);
  const [display, setDisplay] = useState(null);
  const [count, setCount] = useState(0);
  const [leap, setLeap] = useState (1);
  const [color, setColor] = useState ('yellow-500');
  const [colorful, setColorful] = useState ([
    {id:"bg-yellow-500", text:"yellow-500", label: "Yellow"},
    {id:"bg-green-500", text:"green-500", label:"Green"},
    {id:"bg-blue-500", text:"blue-500", label:"Blue"}
  ]);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + leap);
    }, 1000);
  }, [count,leap]);
  

  function handleDelete(id){
    setDisplay([]);
    fetch('http://localhost:8000/posts/'+id, {
      method: 'DELETE'
    })
  }

  useEffect(
    ()=>{
      fetch('http://localhost:8000/posts')
      .then((res)=>{return res.json()})
      .then((data)=>setPosts(data))
    }
    ,[posts]
  );


  function getBody(id){
    fetch('http://localhost:8000/posts/'+id)
    .then((res)=>{return res.json()})
    .then((data)=>setDisplay(data.body.split(/\r?\n/)));
    console.log(display);
  } 

  return ( 
    <div className="flex bg-gray-800 py-4 h-fit min-h-screen ">
      
      <div className="w-1/2 bg-gray-800">
        {posts.map((post)=>(
          <div className="flex p-5" key={post.id}>
            <div className="px-4 py-8 ml-20 w-1/2  bg-gray-900 border-2bg-indigo-500 border border-green-400">
              <h2 className="text-xl text-gray-400">{post.title}</h2>
              <p className="text-gray-400">Written by {post.author}</p>
            </div>
            <div className="ml-5 flex flex-col bg-gray-800">
              <button onClick={()=>handleDelete(post.id)} className="text-red-500 h-5 ">Delete</button>
              <button className="rounded-full px-1 py-0.5  bg-black text-white border-indigo-500 focus:ring-black focus:border-black   dark:text-black hover:opacity-50" onClick={()=>getBody(post.id)}>display</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className=" mb-12 ">
          {display &&<FlyoutLink FlyoutContent={FlyoutContent} colorful={colorful} color={color} setColor={setColor}>Change Color</FlyoutLink>}
        </div>
        <ul className="text-white">
          {display&&display.map((str,index)=>
            <pre key={index}><li key={index} className={`${index===count%display.length?"text-"+color:""}`}>
              {str}
            </li>
            </pre>)}
        </ul>
      </div>
      
    </div>
   );
}
 
export default Home;