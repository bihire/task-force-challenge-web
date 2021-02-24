import React, { Component } from 'react'

import './story_card.scss'

const StoryCard = (user) => {
    return (
        <div>
            <div className='storyCard'>
                <div className='storyCard_left'>
                    <div className='storyCard_left_img-container'>
                        <div className='storyCard_left_img-container_char'>
                            {user.user.first_name[0]}
                </div>
                    </div>
                </div>
                <div className='storyCard_right'>
                    <div className='storyCard_right_title'>
                        {user.user.first_name} {user.user.last_name} - <span className='storyCard_right_time'>
                            {/* 9 hours ago */}
                        </span>
                    </div>

                    <div className='storyCard_right_field'>
                        <div className='storyCard_right_field_email'>
                            {user.user.email}
                        </div>
                        <div className='storyCard_right_field_phone'>
                            {user.user.phone_number}
                        </div>
                    </div>

                    
                </div>

            </div>
            <div className="solid_divider"></div>
        </div>
        
    )

}

export default StoryCard;