import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/phoneBook/phoneBookSlice';

export const ContactList = () => {
  const { filter, contacts } = useSelector(state => state);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase().trim())
  );
  const dispatch = useDispatch();
  const onDelete = event => {
    const id = event.currentTarget.id;
    dispatch(removeContacts(id));
  };
  // 102035418111;
  return (
    <>
      <ul>
        {filteredContacts.map(data => {
          return (
            <li key={data.id}>
              {data.name} : {data.number}
              <button id={data.id} onClick={onDelete}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
