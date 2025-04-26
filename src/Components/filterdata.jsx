import { useMemo } from "react";

export const FilteredList = ({ users, search }) => {
    users = ["zebra", "apple", "Monkey", "banana", "appleseed"];
search = "ap";

  const filteredUsers = useMemo(() => {
    const result = users
      .filter((user) =>
        user.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.localeCompare(b));  // 🌟 added sorting here
    return result;
  }, [users, search]);

  return (
    <ul>
      {filteredUsers.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};
