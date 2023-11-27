import React, { useState } from 'react'

export const FormCourse = () => {
    const [course, setCourse] = useState({});
    const save = (e)=>{
        e.preventDefault();
        let jcourse = {
            title: e.target.title.value,
            year: e.target.year.value,
            description: e.target.description.value,
            author: e.target.author.value,
            email: e.target.email.value
        }
        console.log(courseForm(e.target));
        setCourse(jcourse);
    }
    const change = ({target})=>{
        const {name, value} = target;
        setCourse({
            ...course,
            [name]: value
        })
    }
    const courseForm = (form)=>{
        const formData = new FormData(form);
        let lcourse = {};
        for(let [name, value] of formData){
            lcourse[name] = value;
        }
        return lcourse;

    }

    return (
        <div className='form-course'>
            <h1>Save a new course, if you want {">u<"}</h1>
            <pre>{JSON.stringify(course)}</pre>
            <form className='create-course' onSubmit={save}>
                <input type='text' name='title' onChange={change}  placeholder='Title'/>
                <input type='number' name='year' onChange={change}  placeholder='Year of release'/>
                <textarea name='description' onChange={change}  placeholder='Description'/>
                <input type='text' name='author' onChange={change}  placeholder='Author'/>
                <input type='email' name='email' onChange={change}  placeholder='Email'/>
                <input type='submit' value={"Save"}/>

            </form>
        </div>
    )
}
