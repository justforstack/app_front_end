import React from 'react';
import EnterpriseHeader from '../Headers/EnterpriseHeader'
function AddLocationDashboard(props) {
    const addLocation=()=>{

    }
    return (
        <div>
            <EnterpriseHeader/>
            <button onClick={addLocation}>Add Locations</button>
            <table>
                <tbody>
                        <tr>
                        <td> Location Name</td>
                        <td>  Location Address</td>
                        </tr>
                </tbody>
            </table>

        </div>
    );
}

export default AddLocationDashboard;