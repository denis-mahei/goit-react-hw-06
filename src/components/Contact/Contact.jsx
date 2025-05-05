import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import { FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li key={id} className={css.userCard}>
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
