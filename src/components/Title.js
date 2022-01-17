import React, { Component } from 'react';

export default function Title({name,title}) {
   
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title"></div>
                <div className="text-capitalaze font-weight-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </div>
            </div>
        );
    
}

// Di dalam function Title ({props}) => menangkap variabel/melempar variabel dari ProductList