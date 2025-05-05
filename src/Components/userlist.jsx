import React from 'react';
import useFetch from './usefectch';
 
 export function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
    {data && Array.isArray(data) ? (
      data.map((user) => <li key={user.id}>{user.name}</li>)
    ) : (
      <p>No data available</p>
    )}
  </ul>
  );
}
