import React from 'react';

const MainProjectsBar = ({location, maintext}) => {
    return (
        <div  className="mainProjectsBar">
            <div className="mainProjectsBar-text">
                <span>{location}</span>
                <h1>{maintext}</h1>
            </div>
            <div className="mainProjectsBar-links">
                <div>
                    <button className='flex'>
                        Project Specs <span className='flex-center rotate-[-90deg] ml-5'><img src="/orange-arrow.svg" alt=""/></span>
                    </button>
                </div>
                <div>
                    <a href={"#content"}>Discover the story</a>
                </div>
            </div>
        </div>
    );
};

export default MainProjectsBar;