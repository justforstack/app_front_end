import React from 'react'
import { Table } from 'reactstrap'
import AddEnterprise from './AddEnterprise'
const ShowEnterprises = ({ orgData }) => {
    console.log(orgData)
    
    return (
        <>
            <AddEnterprise organizationData={orgData} />
            <Table
                borderless
                hover
                responsive
            >
                <thead>
                    <tr>
                        <th>
                            Enterprise Code
                        </th>
                        <th>
                            Enterprise Name
                        </th>
                        <th>
                            Enterprise Address
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                  
                        {
                            Object.keys(orgData.enterprises).map((key, i) => (
                                <tr key={i}>
                                    <td>{orgData.enterprises[key].enterpriseCode}</td>
                                    <td>{orgData.enterprises[key].enterpriseName}</td>
                                    <td>{orgData.enterprises[key].enterpriseAddress}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>

        </>
    )
}

export default ShowEnterprises