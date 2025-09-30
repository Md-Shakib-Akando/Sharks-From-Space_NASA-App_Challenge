import React from 'react';
import { Outlet } from 'react-router';

const RootLayOut = () => {
    return (
        <div className="bg-slate-800 ">
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayOut;