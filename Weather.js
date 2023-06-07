
import axios from 'axios'
import React from 'react'
import { useState, } from 'react'
import { useEffect } from 'react'
export default function Weather() {
const [data, setdata] = useState("")
const [typecity, settypecity] = useState("Delhi")

    const options = {
      city:{typecity},
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1114a4c5e6mshc37f1ecfd78de7dp1c4d24jsnc49c09e75e97',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

    const getdata = (typecity)=>{
     
      const Apiurl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${typecity}`
        axios.get(Apiurl,options).then((res)=>{
            console.log("response", res)
            setdata(res.data)
        }).catch((err)=>{
            console.log("err", err)
        })
    }
    useEffect(()=>{
        getdata("Delhi")
    },[])
    const handlesearch=(e)=>{
      e.preventDefault()
      getdata(typecity)
    }
const handletypecity=(e)=>{
  e.preventDefault()
settypecity(e.target.value)

console.log('value',e.target.value)
}
  return (
 <>
 
 <div className="container">
 <form class="d-flex mt-5">
        <input class="form-control me-2" onChange={handletypecity} value= {typecity} type="location"list="country" name="country" placeholder="Search your location" aria-label="Search" style={{backgroundColor: 'yellow'}}/>
        <button class="btn btn-warning" id='city' onClick={handlesearch} type="submit">Go</button>
      </form>
 <h1 className="text-center mt-5  " style={{backgroundColor: 'red', borderRadius: '10px', fontFamily: 'fantasy'}}>Weather For {typecity}</h1>
 <div class="row row-cols-1 row-cols- text-center center"style={{display: 'flex',alignItems: "center",justifyContent: 'center'}}>
      <div class="col" >
        <div class="card mb-4 mt-3 rounded-3 shadow-sm  "style={{backgroundColor: 'yellow', borderRadius: '10px', fontFamily: 'fantasy'}}>
          <div class="card-header py-3 bg-danger">
            <h4 class="my-0 fw-normal text-white">Temperature</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{data.feels_like}&#176; C</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Max temp {data.max_temp}&#176;</li>
              <li>min temp {data.min_temp}&#176;</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 mt-5 rounded-3 shadow-sm  ">
          <div class="card-header py-3 bg-primary">
            <h4 class="my-0 fw-normal text-white">Humidity/Cloud PCT</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{data.humidity}%</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Wind Speed : {data.wind_speed}Km/h</li>
              <li>Cloud PCT {data.cloud_pct}&#176;</li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
 </div>
 
 </>
  )
}
