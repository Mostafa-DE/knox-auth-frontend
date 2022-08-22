import React, {useEffect, useState} from "react";
import Header from "../Header";

interface User {
    created: string;
    email: string;
    id: number;
    is_active: boolean;
    updated: string;
    username: string;
}

function Home() {
    const [user, setUser] = useState<User>();
    const fetchUser = async () => {
        const res = await fetch('https://djangodemoauth.herokuapp.com/api/auth/user/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        if (!res.ok) console.log("Oops, something went wrong!!");
        if (res.ok) setUser(data);
    }

    useEffect(() => {
        fetchUser().then(() => {
            console.log('done');
        })
    }, [])


    return (
        <>
            <Header user={user}/>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <h1>Welcome in Home Page</h1>
                <h3>{!user && 'You are not logged in, login now to see your info...'}</h3>

                {user && (
                    <>
                        <h2>Your Details:-</h2>
                        <ul>
                            <li><b>User Name:</b> {user.username}</li>
                            <li><b>Email Address:</b> {user.email}</li>
                            <li><b>Account Status:</b> {user.is_active && 'Active'}</li>
                            <li><b>Created date:</b> {user.created}</li>
                        </ul>
                    </>
                )}
            </div>
        </>
    )
}

export default Home
