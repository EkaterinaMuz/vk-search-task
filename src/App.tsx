import { SearchForm } from "./components/SearchFrom/SearchForm";
import { UsersProvider } from "./components/SearchResults/UsersContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

export default function App() {

  return (
    <UsersProvider>
      <SearchForm />
      <SearchResults />
    </UsersProvider>
  );
}
