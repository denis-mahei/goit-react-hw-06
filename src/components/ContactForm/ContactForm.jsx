import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required!'),
});
const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <div>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field className={css.formField} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field
            className={css.formField}
            type="text"
            name="number"
            id="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
