import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

const ContactList = ({ userCard, onDelete }) => {
  return (
    <ul className={css.cardContainer}>
      {userCard.map((card) => (
        <Contact
          key={card.id}
          name={card.name}
          number={card.number}
          id={card.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
