import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./contact.module.css";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteContact(contact.id));
  return (
    <div className={css.contactBox}>
      <div>
        <p>
          <span className={css.icon}>
            <FaPhone />
          </span>
          {contact.name}
        </p>
        <p>
          <span className={css.icon}>
            <FaUserLarge />
          </span>
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
