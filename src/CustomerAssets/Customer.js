import React from 'react'
import Sidebar from '../components/templates/Sidebar'
import UserHeader from '../components/UserTemplate.js/UserHeader'
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