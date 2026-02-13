import './App.css'

function Header(){
    return (
    <div className="header-title-container">
      <span className="it-squarehub">IT SQUAREHUB</span>
      <span className="header-text">| Ticketing System</span>
    </div>
  )
}
function Form(){
  return(
    <div>
      <header className='header-title'>Report an Issue</header>
      <p className='header-text'>Describe the problem you've encountered.</p>
      <div className='form-container'>
        <form action="submit">
          <label htmlFor="Name">Name:</label>
          <input type="text" name="name" id="Name" placeholder='Enter your name' />

          <label htmlFor="Issue-title">Issue title:</label>
          <input type="text" name="issue-title" id="Issue-title" />

          <label htmlFor="Description">Description</label>
          <input type="text" name="description" id="Description" />

          <label htmlFor="Category">Category</label>
          <select id='category' name='category'>
            <option value="">Select Category</option>
            <option value="network">Network</option>
            <option value="hardware">Hardware</option>
            <option value="software">Software</option>
          </select>

          <label htmlFor="Email">Email</label>
          <input type="text" name="email" id="Email" required/>

          <input type="file" name="issue-photo" id="issue-photo" />
          <button type='submit'>Submit Ticket</button>
        </form>
      </div>
    </div>
  );
}
function App() {
  return(
    <>
      <Header />
      <Form />
    </>
  );
}

export default App
