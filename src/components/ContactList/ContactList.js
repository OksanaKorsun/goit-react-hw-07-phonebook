import {
  ListItemText,
  DeleteButton,
  ListItem,
  List,
} from './ContactList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { StyledIcon } from './ContactList.styled';
export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ListItemText>
              {name} - {number}
            </ListItemText>
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              <StyledIcon size={22} />
            </DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};
