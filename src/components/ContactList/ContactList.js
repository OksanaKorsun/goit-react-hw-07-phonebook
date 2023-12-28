import {
  ListItemText,
  DeleteButton,
  ListItem,
  List,
} from './ContactList.styled';
import { selectContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import { deleteContact } from '../../redux/operations';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteContact(id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ListItemText>
              {name} - {number}
            </ListItemText>
            <DeleteButton onClick={() => handleDelete(id)}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};
