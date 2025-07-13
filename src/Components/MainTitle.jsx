import React from 'react';

const MainTitle = ({mainText, mainTextOrange, handleClick, children }) => {

    return (
        <div className="mainTitle">
            <h1>
                {mainText}<span className='passions-conflict-regular'>{mainTextOrange}</span>
            </h1>

            {handleClick && <div onClick={() => handleClick()} className="title__item">
                {children}
                <div className='link'><img src="/orange-arrow.svg" alt=""/></div>
            </div>}


        </div>
    );

};

export default MainTitle;