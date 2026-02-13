import './App.css';
import { useState } from "react";
import axios from "axios";

function Header() {
  return (
    <div className="header-title-container">
      <span className="it-squarehub">IT SQUAREHUB</span>
      <span className="header-text">| Ticketing System</span>
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    issue_title: "",
    description: "",
    category: "",
    email: ""
  });

  // Handle input changes
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/tickets",
        formData
      );

      console.log("Ticket saved:", res.data);
      alert("Ticket Submitted ✅");

      // Reset form after submit
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
    <div>
      <header className='header-title'>Report an Issue</header>
      <p className='header-text'>Describe the problem you've encountered.</p>

      <div className='form-container'>
        <form onSubmit={onSubmit}>
          
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="name"
            id="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={onChange}
          />

          <label htmlFor="Issue-title">Issue title:</label>
          <input
            type="text"
            name="issue_title"
            id="Issue-title"
            value={formData.issue_title}
            onChange={onChange}
          />

          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name="description"
            id="Description"
            value={formData.description}
            onChange={onChange}
          />

          <label htmlFor="Category">Category</label>
          <select
            id="Category"
            name="category"
            value={formData.category}
            onChange={onChange}
          >
            <option value="">Select Category</option>
            <option value="network">Network</option>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
          </select>

          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="Email"
            required
            value={formData.email}
            onChange={onChange}
          />

          {/* File input (not yet connected to backend) */}
          <input type="file" name="issue-photo" id="issue-photo" />

          <button type="submit">Submit Ticket</button>

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
