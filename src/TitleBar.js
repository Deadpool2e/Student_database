import React from 'react';

const TitleBar = () => {
    const [theme,setTheme]=React.useState('dark-theme');
    const handleChange = () => {
        (theme==='dark-theme' ? setTheme('light-theme') : setTheme('dark-theme'));
    }
    React.useEffect(() => {
        document.body.className= theme;
    },[theme])

    return (
        <div className="titlebar">
            <span className="title">Student Database</span> 
            <span className="mode">Light Mode</span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
export default TitleBar;