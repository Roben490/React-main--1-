import React, { useEffect, useState } from "react";
import User from "../interface/User";

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

// Step 1
// Create Context
export const UserContext = React.createContext<UserProps>({
  users: [],
  setUsers: () => {},
});

export default function UserProvider({ children }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    // Step 2
    // Call the Context
    <UserContext.Provider value={{ users, setUsers }}>
      {/* Step 3
      Add Children */}
      {children}
    </UserContext.Provider>
  );
}
