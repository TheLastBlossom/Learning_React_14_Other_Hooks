import { useState } from 'react'

export const useForm = (initObject = {})=>{
    const [course, setCourse] = useState(initObject);
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
        var json = document.querySelector(".json");
        json.className += " highlight";
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
    return {
        save,
        change,
        course
    };
}