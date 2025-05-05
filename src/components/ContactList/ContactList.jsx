import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  const filteredValue = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredValue.toLowerCase())
  );

  return (
    <ul className={css.cardContainer}>
      {visibleContacts.map((card) => (
        <Contact {...card} key={card.id} />
      ))}
    </ul>
  );
};
export default ContactList;
