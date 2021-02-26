import React, { Component } from 'react'

import './icon_btn.scss'

const IconButton = ({
    className,
    value
}) => {
    return (
        <div>
            <div className={className ? `${className} IconButton` : `IconButton`}>
                {value}
            </div>
        </div>
    )

}

export default IconButton;