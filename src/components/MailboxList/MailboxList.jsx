import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>List of Mailboxes</h2>
      <ul>
        {mailboxes.map((mailbox) => (
          <li>
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox: {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
