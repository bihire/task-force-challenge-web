import React, { Component } from 'react'

import './icon_btn.scss'

const IconButton = ({
    onClick,
    className,
    value
}) => {
    return (
        <div>
            <div onClick={onClick}  className={className ? `${className} IconButton` : `IconButton`}>
                {value}
            </div>
        </div>
    )

}

export default IconButton;