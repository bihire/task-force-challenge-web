import React, { Component } from 'react';

import './category.scss'

const Category = ({
    value
}) => {
    return (
        <div className='Category'>
           {value}
        </div>

    )

}

export default Category;