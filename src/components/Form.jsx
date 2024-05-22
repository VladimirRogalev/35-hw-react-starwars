import React from 'react';


const Form = ({planets}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="formTitle">Title</label>
                <input type="text" className="form-control mb-3" id="formTitle" placeholder="Insert your title"/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="formSelector">Select a planet</label>
                <select
                    className="form-control"
                    id="formSelector">
                    <option value="">Choose planet</option>
                    {planets.map((planet, index) => (<option key={index}>{planet.name}</option>))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="formText">Your text</label>
                <textarea
                    className="form-control mb-3"
                    id="formText"
                    rows="4"
                    placeholder="Insert your text..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    );
};

export default Form;