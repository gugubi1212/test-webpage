import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Home from "./Home";

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState([]);
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('text-yellow-500');
  const history = useNavigate();



  function handleSubmit(e){
    e.preventDefault();
    const post = {title, body, author, color};
    fetch('http://localhost:8000/posts',{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(post)
    })
    .then(()=>{history(-1)})
  }

  
  return ( 
   <div className="bg-gray-800 text-gray-300 h-screen">
    <form>
      <label>Title:</label>
      <input type="text"
      className="block p-2.5 text-sm bg-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
      placeholder="Title" 
      required
      value={title}
      onChange={(e)=>setTitle(e.target.value)}></input>
      <label>Author:</label>
      <input type="text" 
      className="block p-2.5 text-sm bg-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
      placeholder="Author" 
      required
      value={author}
      onChange={(e)=>setAuthor(e.target.value)}></input>
      
      <label>Content:</label>
      <textarea  
      id="contentInput"
      className="block p-2.5 w-2/3 h-80 text-sm bg-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
      placeholder="Texts"
      value={body}
      onChange={(e)=>setBody(e.target.value)}>
      </textarea>

      <button type="submit" 
      className="rounded-full ml- mt-3 px-1 py-0.5 bg-indigo-500 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
      onClick={(e)=>handleSubmit(e)}>submit</button>

    </form>
   </div> 
   );
}
 
export default Create;