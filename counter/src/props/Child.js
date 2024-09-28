import React from 'react';


const ChildForm = ({ data, error, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type='text' name='name' placeholder='Enter the yout name' value={data.name} onChange={handleChange} />
                {error.name && <p className="error">{error.name}</p>}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type='password' name='password' placeholder='Enter the your password' value={data.password} onChange={handleChange} />
                {error.password && <p className="error">{error.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ChildForm;