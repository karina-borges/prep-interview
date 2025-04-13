import { useReducer, useState } from "react";
import { AddUserForm } from "./components/AddUserForm";
import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CountryList";
import { favoritesReducer, initialState } from "./reducers/favoritesReducer";

function App() {
  const [selectedCode, setSelectedCode] = useState(null);

  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <div>
      <AddUserForm />
      <h1>🌍 Country Explorer</h1>
      {selectedCode && <CountryDetails code={selectedCode} />}
      <CountryList
        onSelect={setSelectedCode}
        dispatch={dispatch}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
