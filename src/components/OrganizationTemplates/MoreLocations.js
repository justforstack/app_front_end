import React,{useState,useRef} from 'react';
import {useSelector} from 'react-redux'
import {storeLocations} from '../../Reducers/Reducer'
import {useDispatch} from 'react-redux'
function MoreLocations(props) {
    
    const moreLoc={props}
    const [locStore,setLocStore]=useState({});
    const dispatch=useDispatch();
    const loc_name_ref=useRef(null)
    const loc_addr_ref=useRef(null)
    const tempSave= ()=>{
         const loc={ 
            location_name : loc_name_ref.current.value,
            location_addr: loc_addr_ref.current.value  
         }
         dispatch(storeLocations(loc));
         
        //  let obj=[];
        //  obj={...moreLoc,...loc};

        //  let array=[];
        //  array.push(loc);
        //  console.log(array)
        // props.setMoreLoc(array);
        //  //setLocStore(loc);
        //  console.log(moreLoc)
    }
    const addLoc=(e)=>{
e.preventDefault();
    }
    return (
        <div>
             <p className="mt-3">
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#addLocations" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add more Locations
                </a>
            </p>
                        <div className="collapse" id="addLocations">
                <div className="card card-body">
                    <form onSubmit={addLoc}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="locationName"> Location Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationName"
                                            placeholder="Enter Here"
                                           ref={loc_name_ref}
                                        />
                                    </td>
                                </tr>
                                <tr className="m-3">
                                    <td><label htmlFor="locationAddress">Location Address </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationAddress"
                                            placeholder="Enter Here"
                                            ref={loc_addr_ref}
                                        />
                                    </td>
                                </tr>
                               
                                <tr>
                                    <td>
                                        <button className="btn btn-primary mt-3"
                                           
                                            onClick={tempSave}
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

        </div>
    );
}

export default MoreLocations;