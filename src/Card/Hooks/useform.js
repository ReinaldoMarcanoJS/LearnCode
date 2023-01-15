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
            setTimeout(() => {
                setForm(initialData)
            }, 2000);
                    setLoading(false)
          }else{      

                if(err.firstname){
                    initialData.firstname = "";
                }else{
                    initialData.firstname = form.firstname;
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




