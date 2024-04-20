import { useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("nitish");
  // let [username, setUsername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    userNane: "",
  });

  // let handleNewChange = (event) => {
  //   setFullName(event.target.value);
  // };

  // let handleUserName = (event) => {
  //   setUsername(event.target.value);
  //};

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full name </label>
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      <br></br>
      <br></br>
      <label htmlFor="username">username </label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="username"
      />

      <br></br>
      <br></br>
      <label htmlFor="password">password </label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
