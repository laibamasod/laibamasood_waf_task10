
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [name, setName]= useState("");
  const [age, setAge]= useState();
  const handleChange =(event)=>{
setName(event.target.value);
  }
  const generate = ()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data.age);
      if(res.data.age=== null){
        setAge("No Age for this name")
      }
      else{
     setAge(res.data.age);
      }
  })
  }
  useEffect( ()=>{
  //   axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
  //     console.log(res.data.age);
  // })
  },[]);
  return (
     <div className='App'>
     <input onChange={handleChange} type='text' />
      <button onClick={generate}> Generate</button>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

export default App;
