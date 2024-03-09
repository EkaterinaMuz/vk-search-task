import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./styles.css";
import { UsersContext } from "../SearchResults/UsersContext";

export function SearchForm() {
  const [value, setValue] = useState<string>('');
  const { fetchAllUsers } = useContext(UsersContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (value.trim() !== '') fetchAllUsers(value);
    }, 500);
    return () => clearTimeout(timerId);
  }, [value]);

  return (
    <div className="searchForm">
      <form>
        <input type="text" placeholder="Введите что-нибудь :)" value={value} onChange={handleChange} />
      </form>
    </div>
  );
}
