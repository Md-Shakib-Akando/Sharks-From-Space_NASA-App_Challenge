import React from 'react';
import { Outlet } from 'react-router';

const RootLayOut = () => {
    return (
        <div className="">
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayOut;