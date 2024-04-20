import { useState } from "react";
export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <p> give a comment </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> username</label>
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br></br> <br></br>
        <label htmlFor="remark"> Remark</label>
        <textarea
          value={formData.remarks}
          placeholder=" add few remarks"
          onChange={handleInputChange}
          id="remark"
          name="remarks"
        ></textarea>
        <br></br> <br></br>
        <label htmlFor="rating"> Rating </label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br></br> <br></br>
        <button>Add comment </button>
      </form>
    </div>
  );
}
