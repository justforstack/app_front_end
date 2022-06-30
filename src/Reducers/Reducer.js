const ADD_LOCATION='ADD_LOCATION'

//action
export function storeLocations(locations){
    console.log(locations)
    return{
        type:'ADD_LOCATION',
        payload:locations
    }
}
const initialLocationState=[
    {
     locationName:'',
    locationAddress:''
    }
]
//reducer
function reducer(state=initialLocationState,action){
switch(action.type){
    case 'ADD_LOCATION':return  [
        ...state,
        {
            locationName: action.payload.location_name,
            locationAddress: action.payload.location_addr
        }
      ];
      default:return state;
}
}
export default reducer