import Contact from 'components/Contact/Contact';
import { ContactListWrapper } from './ContactList.styled';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ContactListWrapper>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListWrapper>
  );
};

export default ContactList;
