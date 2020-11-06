import React from 'react';
import desktop404 from './../../static/images/desktop404.png'
import mobile404 from './../../static/images/mobile404.jpg'

export const Page404 = () => {
    return (
    <div className="pageNotFound">
        <picture className="pageNotFound__picture">
            <source 
                media="(max-width:1000px)"
                srcSet={mobile404}
            />
            <source 
                media="(min-width:1001px)"
                srcSet={desktop404}
            />
            <img src={desktop404} alt="404 page not found"/>
        </picture>
    </div>
    )
}