import React, { useState } from "react";



const useForm = (initialData, onValidate) => {

    const [form, setForm] = useState({initialData});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando formulario');
        const err = onValidate(form)
        if ( err === null){
            console.log('enviando formulario')
        }else{
            setErrors(err)
        }
    }

    return {
        form,
        loading,
        handleChange,
        handleSubmit,
        errors
    }
}


export {useForm};




