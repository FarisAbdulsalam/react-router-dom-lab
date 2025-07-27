import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <>
      {!mailbox ? (
        "Mailbox not found!"
      ) : (
        <div>
          <h2>Mailbox ID: {mailbox._id}</h2>
          <ul>
            <li>Box Holder:</li>
            <li>{mailbox.boxholder}</li>
            <li>Box Size:</li>
            <li>{mailbox.boxSize}</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MailboxDetails;
