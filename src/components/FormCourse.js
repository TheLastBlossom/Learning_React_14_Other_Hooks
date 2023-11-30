import { useForm } from "../hooks/useForm"

export const FormCourse = () => {
    const {save, change, course } = useForm(); 
    return (
        <div className='form-course'>
            <h1>Save a new course, if you want {">u<"}</h1>
            <pre className="json">{JSON.stringify(course)}</pre>
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
