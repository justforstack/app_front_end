import React from 'react'
import Sidebar from '../templates/Sidebar'
import UserHeader from '../UserTemplate.js/UserHeader'
import AddCustomer from './AddCustomer'

const Customer = () => {
    return (
        <>
            <UserHeader />
            <Sidebar />
            <div>
                <AddCustomer />
            </div>
        </>
    )
}

export default Customer