import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const Form = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required('Please insert your First Name'),
        email: yup
            .string()
            .email('Should be a valid email')
            .required('Please insert your Email'),
        password: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/,
                "Must Contain at least 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null])
            .required('Please Confirm Password'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data)
        alert('Thank you for signing up ')

    }
    return (
        <div className='h-full mt-10 flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex shadow-lg rounded p-4 flex-col gap-3'>
                <div>
                    <label>Name: </label>
                    <input name='firstName' {...register("firstName")} className='border border-gray' type="text" />
                    <p className="text-red-800 font-semibold">
                        {errors?.firstName?.message}
                    </p>
                </div>
                <div>
                    <label>Email: </label>
                    <input name='email' {...register('email')} className='border border-gray' type="email" />
                    <p className="text-red-800 font-semibold">
                        {errors?.email?.message}
                    </p>
                </div>
                <div>
                    <label>Password: </label>
                    <input name='password' {...register('password')} className='border border-gray' type="password" />
                    <p className="text-red-800 font-semibold">
                        {errors?.password?.message}
                    </p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name='confirmPassword' {...register('confirmPassword')} className='border border-gray' type="password" />
                    <p className="text-red-800 font-semibold">
                        {errors?.confirmPassword?.message}
                    </p>
                </div>

                <button type='submit' className='p-2 bg-slate-300'>Sign up</button>
            </form>
        </div>
    )
}

export default Form