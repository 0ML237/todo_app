import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../schema/formSchema";

import AuthContext from '../context/AuthContext';

const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
    resolver: yupResolver(registerSchema),
    });

    const formSubmitHandler = (data) => {
    console.log(data);
    };
    

    let {loginUser} = useContext(AuthContext)

    return (
        <div className="md:w-[500px] max-h-96 shadow-sm shadow-white bg-white w-[320px] mx-auto mt-60 px-7 py-4 rounded-xl border border-gray-500">
            <form onSubmit={loginUser} className="w-full">
            <div className="mb-6 capitalize hover:uppercase place-content-center text-blue-500 font-bold text-2xl text-center">
                <h1>Login Page</h1>
            </div>
            <div className="mb-6">
                <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                Nom d'utilisateur
                </label>
                <input
                {...register("email")}
                type="text"
                name="username"
                id="username"
                className={textInputClassName}
                placeholder="nom d'utilisateur"
                />
                 {errors.username ? (
                  <span className="text-red-900">{errors.username.message}</span>
                ) : (
                  <></>
                )}
            </div>
            <div className="mb-6">
                <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                Mot de passe
                </label>
                <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                className={textInputClassName}
                placeholder="mot de passe"
                />
                {errors.password ? (
                <span className="text-red-600">{errors.password.message}</span>
                ) : (
                <></>
                )}
            </div>
            <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Se connecter
            </button>
            </form>
        </div>
    );
}

export default LoginPage






































































            {/* </div>
            <div className="mb-6">
                <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                Confirmation du mot de passe
                </label>
                <input
                {...register("confirmPassword")}
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                className={textInputClassName}
                />
                {errors.confirmPassword ? (
                <span className="text-red-900">
                    {errors.confirmPassword.message}
                </span>
                ) : (
                <></>
                )}
            </div> */}




{/* <div className="mb-6">
<label
htmlFor="accountType"
className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
>
Choisir le type d'utilisateur
</label>
<select
{...register("accountType")}
name="accountType"
id="accountType"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
<option value="">Type d'utilisateur</option>
<option value="user">Utilisateur</option>
<option value="administrator">Administrateur</option>
<option value="supervisor">Superviseur</option>
</select>{" "}
{errors.accountType ? (
<span className="text-red-900">{errors.accountType.message}</span>
) : (
<></>
)}
</div> */}