import React, { useState } from "react";

const CampusNotice = () => {
  
  const collegename = localStorage.getItem("collegeName");
  const collegid = localStorage.getItem("collegeId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  );
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log("Form submitted:", {
      title,
      collegename,
      collegid,
      description,
      currentDate,
      endDate,
    });

    // const response = await fetch("http://localhost:3000/sendNotice", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title,
    //     collegename,
    //     collegeid,
    //     description,
    //     endDate,
    //   }),
    // });


  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create Notice</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Note Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Notice Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Current Date */}
        <div className="mb-4">
          <label
            htmlFor="currentDate"
            className="block text-sm font-medium text-gray-600"
          >
           Release Date
          </label>
          <input
            type="text"
            id="currentDate"
            name="currentDate"
            value={currentDate}
            readOnly
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-600"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Send to Campus
        </button>
      </form>
    </div>
  );
};

export default CampusNotice;
