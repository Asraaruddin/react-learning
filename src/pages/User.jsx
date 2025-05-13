import { useParams } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function User() {

  const userlist = [
    { id: 1, name: "Asrar" },
    { id: 2, name: "Ayesha" },
  ];
  
  const { id } = useParams();
  const user = userlist.find(u=>u.id===parseInt(id))
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold'>User Id: {id}</h1>
        <h2 className="text-xl mt-2">
        {user ? `Welcome, ${user.name}` : "User not found"}
      </h2>
<h3 className='text-lg font-semibold mt-6 '>All Users:</h3>
<ul className='space-y-2'>
    {userlist.map((user)=>(
        <li key={user.id}>
            <Link to={`/users/${user.id}`} className="text-blue-500 underline">
            {user.name}
            </Link>
        </li>
    ))}

</ul>
    </div>
  );

 

}
