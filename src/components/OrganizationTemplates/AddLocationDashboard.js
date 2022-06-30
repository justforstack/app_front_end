
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import EnterpriseHeader from '../Headers/EnterpriseHeader'
import axios from 'axios'
import { Table } from 'reactstrap'
import MoreLocations from './MoreLocations'
import ShowLocations from './ShowLocations';
import { useSelector } from 'react-redux';
const AddLocationDashboard=(props)=> {
    //let entId=null;
    const location = useLocation();
    let [entId,setEntId]=useState(location.state.id)
    const [entData,setEntData]=useState([])
    const [flag,setFlag]=useState(false)
    const locationState=useSelector(state=>state);
    console.log(locationState)
    const fetchEntData= async () => {
        
            try {
                const response = await axios.get(`https://account-management-system-hero.herokuapp.com/get-enterprise/${entId}`);
                if (response) {
                   console.log(Object.keys(response.data));
                   console.log(Object.values(response.data));
                    if (response.data) {
                        setEntData(response.data);
                        setFlag(true)
                        console.log(response.data);
                       // console.log(entData)
                      // console.log(entData.locations[0].locationCode)
                    } else {
                        console.log('No Schedule Job Locations returned');
                    }
                }
            } catch (err) {
                console.log(err);
            }
        
}
const saveLocationsList=async ()=>{
  await  axios.post(`https://account-management-system-hero.herokuapp.com/add-location/${entId}`,
  {locationData:locationState},
  {
    "Access-Control-Allow-Origin":"*"
})
  .then((res)=>{alert("locations saved successfully");console.log(res.data)})
  .catch(error =>{
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
})
}
    useEffect(()=>{
        const x=location.state;
        setEntId(x.id) 
        console.log(x);
        fetchEntData();
    },[entId,flag])
    return (
        <>
            <EnterpriseHeader enterpriseName={entData.enterpriseName} enterpriseAddress={entData.enterpriseAddress}/>
            <h1>gsvjahbjdk</h1>
           <MoreLocations style={{marginTop:40}}/>
            
            <Table>
                <tr>
                <th>
                    Location Code
                </th>
                <th>
                    Location Name
                </th>
                <th>
                    Location Address
                </th>
                <th>
                    Action
                </th>
                </tr>
             {flag?   <tr>
                    <td>{entData.locations[0].locationCode}</td>
                    <td>{entData.locations[0].locationName}</td>
                    <td>{entData.locations[0].locationAddress}</td>
                    <td><button>Add expenses</button></td>
                </tr>
                :''}
                {locationState && locationState.map((item)=>(
                   <>
                   <tr>
                    <td></td>
                    <td>{item.locationName}</td>
                    <td>{item.locationAddress}</td>
                    <td><button>Add expenses</button></td>
                </tr>
                   </>
               ))}
            <button onClick={saveLocationsList}>Final Save</button>
            </Table>
        </>
    );

}
export default AddLocationDashboard