import React from 'react'

const AddCustomer = (props) => {

    const registerCust = () => {

    }

    const AddCust = () => {

    }

    return (
        <>
            <p className="mt-3">
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#stage1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add new Customer
                </a>
            </p>
            <div className="collapse" id="stage1">
                <div className="card card-body">
                    <form method="" action="/customer" id="custForm" onSubmit={registerCust}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="customerName"> Customer Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="customerName"
                                            placeholder="Enter Here"
                                            onChange={AddCust}
                                        />
                                    </td>
                                    <td><label htmlFor="customerAddress">Customer Address </label></td>
                                    <td>
                                        <input type="text"
                                            name="customerAddress"
                                            placeholder="Enter Here"
                                            onChange={AddCust}
                                        />
                                    </td>
                                    <td><label htmlFor="pincode"> Pin Code  </label></td>
                                    <td>
                                        <input type="text"
                                            name="pincode"
                                            placeholder="Enter Here"
                                            onChange={AddCust}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="btn btn-primary mt-3" data-bs-toggle="collapse" href="#stage2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Add Purchsing Details
                        </p>
                        <div className="collapse" id="stage2">
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="gstno">GST Number</label></td>
                                            <td>
                                                <input type="text" name="gstno" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                            <td><label htmlFor="panNo">Bussiness PAN Number</label></td>
                                            <td>
                                                <input type="text" name="panNo" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                            <td><label htmlFor="uAadharNo">Udhyog Addhar Number</label></td>
                                            <td>
                                                <input type="text" name="uAadharNo" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="btn btn-primary mt-3" data-bs-toggle="collapse" href="#stage3" role="button" aria-expanded="false">
                            Add Account Details
                        </p>
                        <div className="collapse" id="stage3">
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor=""></label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary position-fixed-bottom mt-3"
                            type="submit"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCustomer