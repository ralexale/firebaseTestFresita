import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GiStrawberry } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import * as yup from "yup";
import { auth } from "../../../firebase/firebaseConfig";
import Swal from "sweetalert2";

const numberRegx = /^[0-9]{10}$/;
const schema = yup.object({
    number: yup
        .string()
        .matches(numberRegx, "El valor ingresado debe ser un numero"),
});

const LoginWithPhone = () => {
    const generateRecaptch = () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptch-container",
                {
                    size: "invisible",
                    callback: (response) => {},
                },
                auth
            );
        } catch (error) {
            console.log(error);
        }
    };

    const sendSMS = (number, recaptchaVerifier) => {
        signInWithPhoneNumber(auth, `+57${number}`, recaptchaVerifier)
            .then((response) => {
                window.confirmationResult = response;
                Swal.fire(
                    "Excelente!",
                    `enviamos el mesaje a ${number}`,
                    "success"
                ).then(() => {
                    navigate("/insertcode");
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Ups!! hubo un problema",
                    text: `Este es el problema ${error}`,
                });
            });
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const navigate = useNavigate();
    const onSubmit = (data) => {
        generateRecaptch();
        sendSMS(data.number, window.recaptchaVerifier);
    };
    return (
        <div className="p-4 bg-bg-login h-screen w-screen bg-cover bg-center grid place-items-center">
            <section className="formphone">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" p-10 flex flex-col gap-5 text-center"
                >
                    <GiStrawberry className="drop-shadow-2xl text-shadow text-red-400 text-5xl self-center" />
                    <label htmlFor="" className="flex flex-col gap-3">
                        <span>Ingrese un número de telefono</span>
                        <input
                            {...register("number")}
                            className="border-2 border-blue-200 p-2 rounded-md"
                            type="text"
                            placeholder="número de télefono"
                        />
                    </label>
                    {errors.number ? (
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
                        Enviar sms
                    </button>
                </form>
                <div id="recaptch-container"></div>
            </section>
        </div>
    );
};

export default LoginWithPhone;
