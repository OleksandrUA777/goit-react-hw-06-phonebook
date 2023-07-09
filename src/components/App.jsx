import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <Form />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
