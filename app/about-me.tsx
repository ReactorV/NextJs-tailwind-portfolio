import React from 'react';

export const AboutMe = ({ data }) => {
    const { title, body } = data;

    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
