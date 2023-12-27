import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Form,
  StyledLabel,
  Field,
  FormButton,
  ErrorMessage,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { addContact } from '../../redux/operations';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .integer('Must be an integer')
    .min(1000000, 'Must be at least 7 digits')
    // .max(9999999, 'Must be at most 7 digits')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleContacts = values => {
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (checkContact) {
      Notify.warning(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          handleContacts(values);
          actions.resetForm();
        }}
      >
        <Form>
          <StyledLabel htmlFor="name">
            Name:
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </StyledLabel>

          <StyledLabel htmlFor="number">
            Number:
            <Field name="number" type="tel" />
            <ErrorMessage name="number" component="span" />
          </StyledLabel>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </div>
  );
};
