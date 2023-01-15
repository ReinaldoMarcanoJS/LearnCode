import React, { useState } from "react";

const useForm = (initialData,onValidate) => {

    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [loading,setLoading] = useState(false)
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name] : value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = onValidate(form)
        setErrors(err)

        if (Object.keys(err).length === 0){
            setLoading(true)
            fetch("https://formsubmit.co/ajax/reynaldomarcano4@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setForm(initialData)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false)
        })}else{      
            console.log(Object.keys(err))
            if(err.firstname){
                initialData.firstname = "";
            }else{
                initialData.firstname = form.firstname;
                console.log(initialData.firstname)
            }
            if(err.lastname){
                initialData.lastname = "";
            }else{
                initialData.lastname = form.lastname;
            }
            if(err.email){
                initialData.email = "";
            }else{
                initialData.email = form.email;
            }
            if(err.password){
                initialData.password = "";
            }else{
                initialData.password = form.password;
            }
            setForm(initialData);
            
        };

        
    }



    return {
        handleChange,
        handleSubmit,
        errors,
        loading,
        form
    }
}


export default useForm;




