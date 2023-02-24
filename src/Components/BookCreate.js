import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    //this event handler is used to track whenever the user is
    //going to change the text input in any way and rememeber these
    //event handlers which are wired up to input element are going to recieve 
    //an event object as the first argument and if we want to figure out what
    // we just typed into the input we look at event.target.value
    //This is necessary because the onCreate function, which is passed as
    //a prop to the BookCreate component, needs to receive the latest value of 
    //title in order to create a new book with the correct title.
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // isse form ka jo nature hai ki jo bhi usme enter hoga usse sidha ek HTTP request jayegi vo ni jayegi
    onCreate(title); // ab mera title jaake sidha app component me dikhega 
    setTitle('') //this is done taaki mera text khali rahe mere koi input dalne ke baad
  };

  
  return (
    <div className="book-create">
      <form  onSubmit = {handleSubmit}>
        <h3>Add a Book</h3>
        <label>Title</label>
        <div>
          <input value={title} className= "input" onChange={handleChange} />
        </div>
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default BookCreate;
