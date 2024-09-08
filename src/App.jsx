import css from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Loading contacts...</p>}
      <ContactList />
    </div>
  );
}
