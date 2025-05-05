import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      {children}
    </div>
  );
};
export default Layout;
