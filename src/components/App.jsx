import css from './App.module.css';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import { useEffect, useState } from 'react';
import contact from './contacts.json';
import SearchBox from './SearchBox/SearchBox.jsx';

const App = () => {
  const [userCards, setUserCards] = useState(() => {
    const savedSearch = localStorage.getItem('contacts');
    return savedSearch ? JSON.parse(savedSearch) : contact;
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(userCards));
  }, [userCards]);

  const [searchCard, setSearchCard] = useState('');

  const addUserCard = (newUser) => {
    setUserCards((prevCards) => {
      return [...prevCards, newUser];
    });
  };

  const deleteUserCard = (id) => {
    setUserCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const filteredCard = userCards.filter((card) =>
    card.name.toLowerCase().includes(searchCard.toLowerCase())
  );

  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <p>{searchCard}</p>
      <ContactForm onAdd={addUserCard} />
      <SearchBox value={searchCard} onSearch={setSearchCard} />
      <ContactList userCard={filteredCard} onDelete={deleteUserCard} />
    </div>
  );
};

export default App;
