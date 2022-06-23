import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Table } from 'reactstrap'
import Sidebar from '../templates/Sidebar'
import UserHeader from '../UserTemplate.js/UserHeader'


import ShowEnterprises from './ShowEnterprises'

const Dashboard = ({meta}) => {

    //
    location.reload();

    const location = useLocation();

    const [orgData, setOrgData] = useState([]);
    const [orgId, setOrgId] = useState(meta);    

    if(location.state === null) {
        setOrgId(meta);
    }
        useEffect(() => {
        const fetchOrg = async () => {
            try {
                const response = await axios.get(`https://account-management-system-hero.herokuapp.com/get-organization/${orgId}`);
                if (response) {
                    console.log(Object.keys(response.data).length);
                    if (response.data) {
                        setOrgData(response.data);
                        console.log(response.data);
                    } else {
                        console.log('No Schedule Job Locations returned');
                    }
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchOrg();
    }, []);
    
    // useEffect(() => {
    //     console.log("kachra" + meta);    
    // }, [meta]);

    // console.log(orgData);

    return (
        <>
            <UserHeader organizationName={orgData.organizationName} organizationAddress={orgData.organizationAddress} />
            <Table borderless hover responsive size="sm" className='mt-5'>
                <thead>
                    <tr>
                        <th className="col-md-2" >
                            <Sidebar />
                        </th>
                        <th className="col-md-10 mt-3">
                            <ShowEnterprises orgData={orgData} />
                        </th>
                    </tr>
                </thead>
            </Table>
        </>
    )
}

export default Dashboard