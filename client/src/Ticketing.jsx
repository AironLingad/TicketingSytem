import './Ticketing.css';
import Header from './Header.jsx';
import { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    issue_title: "",
    description: "",
    category: "",
    email: ""
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/tickets",
        formData
      );

      console.log("Ticket saved:", res.data);
      alert("Ticket Submitted ✅");

      setFormData({
        name: "",
        issue_title: "",
        description: "",
        category: "",
        email: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error submitting ticket ❌");
    }
  };

  return (
    <div className="main-container">
      <header className='header-title'>Report an Issue</header>
      <div className='form-container'>
        <p className='header-text-form'>Describe the problem you've encountered.</p>
        <form onSubmit={onSubmit} className='form'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </div>
          
          <div className='form-group'>
            <label htmlFor='issue-title'>Issue title:</label>
            <input
              type="text"
              name="issue_title"
              value={formData.issue_title}
              onChange={onChange}
            />
          </div>
          
          <div className='form-group'>
             <label htmlFor='description'>Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={onChange}
              
            />
          </div>
         
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={onChange}
            >
              <option value="">Select Category</option>
              <option value="network">Network</option>
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
            </select>
          </div>
          
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={onChange}
            />
          </div>
          
          <div className='form-group'>
            <input type="file" name="issue-photo" />
            <button  className='btn-submit' type="submit">Submit Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

export default App;
