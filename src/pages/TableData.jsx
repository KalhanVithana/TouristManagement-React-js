import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function TableData(props) {
const [markAsProduct,setmarkAsProduct]=useState(true);

const getdata =async()=>{

console.log("button call")
    if(props.obj._id)
     await  axios.put('http://localhost:4000/user/u/'+props.obj._id).then(res=>{

     console.log("update data"+res.data._id)
     })
   
 

    console.log(props.obj._id);
   
}

const updatedata =async()=>{

    if(props.obj._id){
        await  axios.put('http://localhost:4000/user/a/'+props.obj._id).then(res=>{

            console.log("update data"+res.data._id)
            })
  
    }
    
  }
 
  const deletedats =async()=>{

    
   const data = await  axios.delete('http://localhost:4000/user/delete/'+props.obj._id);
  
    console.log(data)
  }
    return (
        <Router>
            
        <div>
  
      
            <tr>
          
                <td >{props.obj.ProductName}</td>
                <td>{props.obj.Category}</td>
                <td>{
                        props.obj.markAsProduct ?
                        (
                            <button type="button" class="btn btn-success" onClick={updatedata}> mark</button> 
                        ):

                        (
                            
                           <button onClick={getdata} >not mark</button> 
                            
                        )
}</td>
               
           
            <td><button onClick={deletedats}>delete</button> </td>
          </tr>
        </div>
        </Router>

    )
}
