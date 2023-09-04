import React, {useState} from "react";
const Form=()=>{
    const [formData,setFormData]=useState({
        name:'',
        email:''
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        setFormData({
            name:'',
            email:''
        });
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <label className="form-label">
                Name:
                <input>
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                </input>
            
            </label>

            <label className="form-label">
                Email:
                <input>
                 type="email"
                 email="email"
                 value={formData.email}
                 onChange={handleChange}
                </input>

            </label>

            <button type="button">Submit</button>
        </form>

    )
}