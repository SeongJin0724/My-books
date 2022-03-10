import React from 'react';
import SigninContainer from '../containers/SigninContainers';
import { Redirect } from 'react-router';
import useToken from '../hooks/useToken';

export default function Signin() {
    const token = useToken();

    if (token !== null) {
        return <Redirect to='/'/>
    }
    return(
        <SigninContainer />
    )
}