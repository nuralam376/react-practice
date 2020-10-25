import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddADoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("http://localhost:5000/addadoctor", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Doctor added successfully");
        }
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div
          className="col-md-10 p-4 pr-5"
          style={{ height: "100%", backgroundColor: "#F4FDFB" }}
        >
          <h1>Add A Doctor</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                name="email"
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Upload Image</label>
              <input
                type="file"
                id="file"
                name="file"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddADoctor;
