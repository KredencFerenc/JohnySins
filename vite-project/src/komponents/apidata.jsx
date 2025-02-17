import { useEfect, useEffect, useState } from 'react';

export constFetch = () => {
    const [users, setUsers] = useState ([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> ...)
        .then(data => ...);

    }, []);

    return (
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
     );
};