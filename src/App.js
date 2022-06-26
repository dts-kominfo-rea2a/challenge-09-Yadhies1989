import "./App.css";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Contact data={contacts[0]} />
      <Contact data={contacts[1]} />
    </div>
  );
};

export default App;
