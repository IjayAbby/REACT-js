import React from 'react';

const searchParams = () => {
    const location = "Seattle,WA";
    return (
        <div className = "search-params">
            <form>
                <label>
                    location
                    <input id = "location" value = {location} placeholder = "Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default searchParams;