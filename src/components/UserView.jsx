import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/userSlice';

const UserView = () => {

    const { isLoading, users, error } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading && error ? (<h2>error ocuurred : {error}</h2>) : null}
            {!isLoading && users.length > 0 ? (
                <ul>
                    {
                        users.map(user => (
                            <li key={user.id}>{user.email}</li>
                        ))
                    }
                </ul>
            ): null}
        </div>
    )
}

export default UserView