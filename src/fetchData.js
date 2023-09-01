import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const respone = await fetch(url);
    const user = await respone.json();
    setUser(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="users">
        {user.map((users) => {
          const { id, login, avatar_url, html_url } = users;
          return (
            <div key={id}>
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url}> profile</a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchData;
