import { useContext, useEffect } from "react";
import { UsersContext } from "./UsersContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { users, fetchAllUsers, status, errors } = useContext(UsersContext);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      {status === 'loading' && <div style={{ textAlign: 'center' }}>Loading...</div>}
      {errors && <div style={{ textAlign: 'center' }}>{errors}</div>}
      {status === 'received'
        && (
          <div className="usersList">
            {!users.length && <div style={{ textAlign: 'center' }}>Пользователей не найдено</div>}
            {users.map((user) => (
              <UserCard {...user} key={user.id} />
            ))}
          </div>
        )
      }
    </>
  );
}
