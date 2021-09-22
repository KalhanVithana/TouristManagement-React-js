import React from 'react'
import {MDBContainer,MDBCardBody, MDBCard,MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TableData from './TableData';



export default function AddProduct() {

    const[ProductName,setProductName]= useState('');
    const[Category,setCategory]= useState('');
    const[markAsProduct,setmarkAsProduct]= useState('');
    const[getdata,setdata]= useState([]);
    

useEffect(()=>{

  
        const getuserdata = async ()=>{

          const Product =  await axios.get('http://localhost:4000/user/get');

          if(Product){

            console.log(Product)
            setdata(Product.data)
          }
        }

        getuserdata();
},[])


const onsbutmit = async()=>{

    await axios.post('http://localhost:4000/user/a')
}



  

    const getall = () =>{

        return getdata.map((res,i)=>{
            return <TableData obj={res} key={i}/>
        })
      }


    return (
        <div>
                  
                  
                 <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
             
                <form onSubmit={""}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
        
                  <MDBInput
                    label="Your name"
                    value={ProductName}
                    onChange={(e)=>{
                        setProductName(e.target.value)
                    }}
                    
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />

                   <MDBInput
                    label="Your email"
                    value={Category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
 
                
                  </div>
                  <button type="submit">register</button>
                  </form>

                  </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">product</th>
      <th scope="col">product</th>
      <th scope="col">Category</th>
      <th scope="col">mark</th>
    </tr>
  </thead>
<tbody>
{getall()}
</tbody>
</table>           
                  
    

        </div>


            
    )
}
