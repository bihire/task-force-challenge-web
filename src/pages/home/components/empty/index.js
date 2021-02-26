import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './empty.scss'

const Empty = (user) => {
    return (
            <div className="Empty">
                <div className='Empty_inner'>
                    <div className='Empty_inner_nothing'>
                        NOTHING IN HERE
                    </div>
                    <div className='Empty_inner_girl'>
                        Just like your crush's replies
                    </div>
                    <div className='Empty_inner_start'>
                        <Button value="START WITH A NEW TASK"/>
                    </div>
                </div>
            </div>

    )

}

export default Empty;