import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { actionVerifyCodeAsync } from "../../../redux/actions/loginActions";

// import { yupResolver } from "@hookform/resolvers/yup";

const numberRegx = /^[0-9]{6}$/;
const schema = yup.object({
    code: yup
        .string()
        .matches(numberRegx, "el valor ingresado debe ser de 6 digitos"),
});

const InsertCode = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data);
        dispatch(actionVerifyCodeAsync(data.code));
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-bg-login bg-cover bg-center">
                <form
                    className="formphone flex flex-col items-center  gap-4 p-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label className="flex gap-4 items-center">
                        <span className="font-semibold">
                            Ingrese el código de verificación
                        </span>
                        <input
                            {...register("code")}
                            className="border-2 border-blue-200 p-2 rounded-md"
                            type="text"
                            placeholder="código sms"
                        />
                    </label>
                    {errors.code ? (
                        <span className="bg-red-200 p-2 text-white">
                            {errors.number.message}
                        </span>
                    ) : (
                        <></>
                    )}
                    <button
                        type="submit"
                        className="bg-red-500 text-white font-bold p-3 rounded-md"
                    >
                        Verificar código
                    </button>
                </form>
            </div>
        </>
    );
};

export default InsertCode;
