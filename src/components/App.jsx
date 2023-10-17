import { useEffect, useState } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const phoneContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  // Значение извлекается из локального хранилища браузера с ключом 'contacts'
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts; //Если значение не найдено, устанавливается значение массива phoneContacts.
  });

  const [filter, setFilter] = useState('');

  // Срабатывает при изменении состояния contacts. Сохраняет текущие контакты в локальное хранилище браузера с ключом 'contacts'.
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Добавляет новый контакт в список контактов.
  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );
    // Проверяет, существует ли контакт с таким же именем в списке контактов. Если контакт уже существует, выводится предупреждение.
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact },
    ]);
  };

  //Изменяет значение фильтра.
  const changeFilter = event => {
    setFilter(event.target.value.trim());
  };

  // Получение отфильтрованных контактов.
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Удаление контакта из списка.
  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className="phonebook-wrapper">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        // Фильтр для отображения контактов.
        <Filter value={filter} onChangeFilter={changeFilter} />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}

      <ContactList
        filteredContacts={visibleContacts}
        deleteContact={removeContact}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts && parsedContacts.length) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   createContact = dataByForm => {
//     const isAlreadyExist = this.state.contacts.find(
//       contact => contact.name === dataByForm.name
//     );
//     if (isAlreadyExist) {
//       return alert(`${dataByForm.name} is already in contacts`);
//     }

//     const newContact = {
//       ...dataByForm,
//       id: nanoid(),
//     };

//     this.setState(prev => ({ contacts: [newContact, ...prev.contacts] }));
//   };

//   deleteContact = id => {
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(el => el.id !== id),
//     }));
//   };

//   getFilteredContacts = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();

//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   handleFilterChange = ({ target: { value } }) => {
//     this.setState({ filter: value });
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();
//     const { filter } = this.state;

//     return (
// <div className="phonebook-wrapper">
//   <h1>Phonebook</h1>
//   <ContactForm createContact={this.createContact} />

//   <h2>Contacts</h2>
//   {this.state.contacts.length > 0 ? (
//     <Filter value={filter} onChangeFilter={this.handleFilterChange} />
//   ) : (
//     <p>Your phonebook is empty. Add first contact!</p>
//   )}

//   <ContactList
//     filteredContacts={filteredContacts}
//     deleteContact={this.deleteContact}
//   />
// </div>
//     );
//   }
// }
