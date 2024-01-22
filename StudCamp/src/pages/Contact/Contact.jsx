import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // console.log(name + " " + value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    
      if (formData.fullname == "" || formData.email == "" || formData.message == "") {
         alert("form should not be empty");
      }    
      
      const data = fetch('http://localhost:3000/contact',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might need additional headers, such as authorization headers
        },
        body: JSON.stringify(formData),

      })
      .then((data)=>{
             if(!data.ok){
              console.log("data not recived by server");

             }
             return data.json();
      })
      .then(data => {
        console.log('Success:', data);
        // Handle the successful response here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });

      setFormData({
        fullname: "",
        email: "",
        message: "",
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-800">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-teal-500">
          Contact Us
        </h2>

        <form onSubmit={submitHandle}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="fullname"
              value={formData.fullname}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              id="message"
              name="message"
              value={formData.message}
              rows="4"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
