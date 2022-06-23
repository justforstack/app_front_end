import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const baseURl = "https://account-management-system-hero.herokuapp.com/add-enterprise-location"
const AddEnterprise = ({organizationData}) => {
    const navigate = useNavigate();
    const [enterpriseData, setEnterpriseData] = useState({
        enterpriseName:"",
        enterpriseAddress:"",
        locationName:"",
        locationAddress:"",
        orgId:"",
    })

    const AddEnterprises = (e) =>{
        const newEntData = {...enterpriseData}
        newEntData[e.target.name] = e.target.value
        setEnterpriseData(newEntData)
    }
    
    enterpriseData.orgId = organizationData.organizationId
    // console.log("locat "+enterpriseData.locationName);

    const registerEnt = async (e) => {
        e.preventDefault();
        await axios.post(baseURl, {
            enterpriseName : enterpriseData.enterpriseName,
            enterpriseAddress : enterpriseData.enterpriseAddress,
            locationName : enterpriseData.locationName,
            locationAddress : enterpriseData.locationAddress,
            organizationId : enterpriseData.orgId 
        })
        .then( (res) =>{
            // console.log(res.data);
            console.log(res.data.locations);
            // setEnterpriseData(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
        navigate('/dash-board', {state : {id : enterpriseData.orgId,name : "raka"}})
    }

    const reloadDashboard = () => {
        console.log("kachra");
        navigate('/dash-board', {state : {id : enterpriseData.orgId, name : "erft"}})
    }

    return (
        <>
            <p className="mt-3">
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#addEnterpreise" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add new Enterpreise
                </a>
            </p>
            <div className="collapse" id="addEnterpreise">
                <div className="card card-body">
                    <form method="post" action="/dash-board" id="entForm" onSubmit={registerEnt}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="enterpriseName"> Enterprise Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="enterpriseName"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr className="m-3">
                                    <td><label htmlFor="enterpriseAddress">Enterprise Address </label></td>
                                    <td>
                                        <input type="text"
                                            name="enterpriseAddress"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="locationName"> Location Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationName"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="locationAddress"> Location Address  </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationAddress"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="btn btn-primary mt-3"
                                            type="submit"
                                            onClick={reloadDashboard}
                                        >
                                            Save
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddEnterprise