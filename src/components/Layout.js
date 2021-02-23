import React from 'react';

export default function Layout({children}) {
    return <div className='container'> 
        <p>header here</p>
        {children}
        <p>footer here</p>
    </div>
}