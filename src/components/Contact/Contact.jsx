import { FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import css from './Contact.module.css';
import { useState } from 'react';

const Contact = ({ name, number, id, onDelete }) => {
  const [isFading, setIsFading] = useState(false);

  const handleDelete = () => {
    setIsFading(true);
    setTimeout(() => {
      onDelete(id);
    }, 250);
  };
  return (
    <li className={`${css.userCard} ${isFading ? css.fadeOut : ''}`}>
      <div>
        <p className={css.cardItem}>
          <FaUserTie />
          {name}
        </p>

        <p className={css.cardItem}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
export default Contact;
