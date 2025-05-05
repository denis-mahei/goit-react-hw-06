import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import Layout from './Layout/Layout.jsx';

const App = () => {
  return (
    <Layout>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
};

export default App;
