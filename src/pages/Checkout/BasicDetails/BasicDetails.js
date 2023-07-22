import React, { useState } from 'react'
import "./BasicDetails.css"

const BasicDetails = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        state: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <div className="table-container">
    <table className="firstTable">
      <caption>Basic Information</caption>
      <tbody>
        <tr>
          <th>First Name</th>
          <td>
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>
            <input
              type="number"
              value={formData.phone}
              name="phone"
              onChange={handleInputChange}
              required
            />{" "}
          </td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td>
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>
        <tr>
          <th>Full Address</th>
          <td>
            <input
              type="text"
              value={formData.address}
              name="address"
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>
        <tr>
          <th>City</th>
          <td>
            <input
              type="text"
              value={formData.city}
              name="city"
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>
        <tr>
          <th>State</th>
          <td>
            <input
              type="text"
              value={formData.state}
              name="state"
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>
        <tr>
          <th>Zip Code</th>
          <td>
            <input
              type="number"
              value={formData.zip}
              name="zip"
              onChange={handleInputChange}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="order">
      <button className="ordBtn">Place Order</button>
    </div>
  </div>
  )
}

export default BasicDetails