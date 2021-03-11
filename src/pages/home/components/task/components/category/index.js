import React, { Component } from 'react';

import './category.scss'

const getPriority = (value) => {
    switch (value) {
        case 'medium':
            return 'category_medium';
        case 'high':
            return 'category_high';
        case 'low':
            return 'category_low';
        default:
            return 'category';
    }
}

const Category = ({
    done,
    value
}) => {
    return (
        <div className={done=== true ? 'Category high' : getPriority(value)}>
           {value}
        </div>

    )

}

export default Category;