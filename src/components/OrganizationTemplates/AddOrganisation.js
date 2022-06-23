import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const baseURL = "https://account-management-system-hero.herokuapp.com/add-organization"
const AddOrganisation = (props) => {
    const navigate = useNavigate();
    // let orgid = null; fixed stmt
    let orgid = 220; //for debugging purpose

    const notify = () => toast.success("Organization added successfully!", {
        position: "top-right",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const [organizationData, setOrganizationData] = useState({
        organization_name: "",
        organization_address: "",
    })
    
    const addOrganization = (e) => {
        const newOrgData = {...organizationData}
        newOrgData[e.target.name] = e.target.value
        setOrganizationData(newOrgData)
        //console.log(newOrgData); //for debugging purpose
    }
    
    const registerOrg = async (e) =>{
        e.preventDefault();
        await axios.post(baseURL,{
            organizationName : organizationData.organization_name,
            organizationAddress : organizationData.organization_address
        })
        .then(response=>{
            orgid =  response.data.organizationId;
            // console.log(response.data.organizationId);//for debuggibg purpose
        })
        .catch(err =>{
            console.log(err.response);
        })
        navigate("/dash-board", {state : {id : orgid, name : "rakesh"}});
    }
    console.log(orgid); //for debugging purpose

    


    //form validatation
    /*
    document.addEventListener('DOMContentLoaded', function  (e) {
        const form = document.getElementById('orgForm');
        const fv = FormValidation.formValidation(form, {
            fields:{
                'organization_name' : {
                    validators: {

                    }
                }
            }
        })

    }) */
    return (
        <>
            <div className="container mt-3">
                <div className="mb-3">
                    <h2 className="text-center">Register Organization</h2>
                </div>
                <form method="post" action="/dash-board" id="orgForm" onSubmit={registerOrg}>
                    <div className="form-group">
                        <label for="organization_name">Organization Name </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="organization_name" 
                            placeholder="Enter here"
                            onChange={addOrganization}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label for="organization_address">Organization Address</label>
                        <textarea 
                            className="form-control" 
                            name="organization_address" 
                            rows="3"
                            onChange={addOrganization}
                            required
                            />
                    </div>                    
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={notify}
                        >
                            Register
                        </button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddOrganisation


