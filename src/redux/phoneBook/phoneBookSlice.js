import { createSlice } from '@reduxjs/toolkit';
export const contactsSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      const listOfNames = state.map(({ name }) => name.toUpperCase());
      const { name } = action.payload;

      if (listOfNames.includes(name.toUpperCase())) {
        return alert(`${name} is already in contacs.`);
      }
      state.push(action.payload);
    },
    removeContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContacts, removeContacts } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterUpdate(state, action) {
      return (state = action.payload);
    },
  },
});
export const { filterUpdate } = filterSlice.actions;
