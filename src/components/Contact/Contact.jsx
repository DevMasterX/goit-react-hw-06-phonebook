import { ContactItem, DeleteButton } from './Contact.styled';

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <ContactItem>
      <div>
        {name}: {number}
      </div>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

export default Contact;
