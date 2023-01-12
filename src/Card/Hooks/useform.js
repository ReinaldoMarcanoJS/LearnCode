import React, { useState } from "react";

const useForm = (initialData,onValidate) => {

    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = onValidate(form)

        if ( err.firstname === false){
            console.log('enviando formulario firstname')
        } else if(err.firstname == "test-reply"){
            setErrors(err)
          } else{
            setErrors(err)
            }

        if(err.lastname === false){
            console.log('enviando formulario lastname')
        }else if(err.lastname == "test-reply"){
            setErrors(err)
        }else{
            setErrors(err)
        }

        if ( err.email === false){
            console.log('enviando formulario email')
        }else if(err.email == "test-reply"){
            setErrors(err)
        }else{
            setErrors(err)
        }

        if ( err.password === false){
            console.log('enviando formulario password')
        }else if(err.password == "test-reply"){
            setErrors(err)
        }else{
            setErrors(err)
        }
        
    }



    return {
        form,
        loading,
        handleChange,
        handleSubmit,
        errors,
        loading
    }
}


export default useForm;




