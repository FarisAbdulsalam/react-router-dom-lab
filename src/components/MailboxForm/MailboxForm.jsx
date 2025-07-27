import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  _id: 0,
  boxSize: "",
  boxHolder: "",
};

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="boxholder">Boxholder: </label>
          <input
            name="boxholder"
            type="text"
            value={formData.boxholder}
            onChange={handleChange}
            required
          />
          <label htmlFor="boxSize">Box Size: </label>
          <select
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
            required
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="submit">Create Mailbox</button>
        </form>
      </main>
    </>
  );
};
export default MailboxForm;
