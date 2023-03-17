import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAsync } from "../../redux/actions/loginActions";
import fresas from "../../assets/fresas.png";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const { error, loading, isLogged } = useSelector((state) => state.login);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/");
        }
    }, [isLogged]);

    const onSubmit = (data) => {
        dispatch(loginUserAsync(data));
    };
    return (
        <section className="p-5 flex bg-bg-login h-screen w-screen bg-cover bg-center items-center justify-center flex-col gap-2 ">
            <figure className="h-32 w-60 relative bottom-28 ">
                <img src={fresas} alt="" />
            </figure>
            <form
                className="form flex flex-col gap-5 items-center "
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="flex flex-col gap-3 ">
                    <span className="font-bold underline text-xl decoration-purple-500">
                        Email
                    </span>
                    <input
                        className={`border-2 p-2 rounded-md shadow-xl shadow-indigo-600/20 ${
                            errors.email ? "border-red-300" : ""
                        }`}
                        type="text"
                        placeholder="Email"
                        {...register("email", { required: "Email requerido" })}
                    />
                </label>
                {errors.email ? (
                    <span className="text-red-500">{errors.email.message}</span>
                ) : (
                    <></>
                )}
                <label className="flex flex-col gap-3 ">
                    <span className=" font-bold underline text-xl decoration-purple-500">
                        Contraseña
                    </span>
                    <input
                        className={`border-2 p-2 rounded-md shadow-xl shadow-indigo-600/20 ${
                            errors.password ? "border-red-300" : ""
                        }`}
                        type="password"
                        placeholder="Contraseña"
                        {...register("password", {
                            required: "Contraseña requerida",
                        })}
                    />
                </label>
                {errors.password ? (
                    <span className="text-red-500">
                        {errors.password.message}
                    </span>
                ) : (
                    <></>
                )}
                <button
                    disabled={loading}
                    className="bg-blue-300 p-3 rounded-md font-semibold shadow-xl shadow-green-500/50"
                    type="submit"
                >
                    Iniciar sesion
                </button>
            </form>
            {error.status ? (
                <span className=" bg-red-300 p-2  m-5 text-white">
                    {error.message}
                </span>
            ) : (
                <></>
            )}
            <h3 className="text-center font-bold">
                ¿No tienes un usuario? Puedes{" "}
                <Link to="/register" className="text-blue-500 hover:text-white">
                    Crear uno
                </Link>
            </h3>
            <div className="text-center font-bold">
                <span>Accerder con: </span> <br />
                <Link
                    className="text-blue-500 hover:text-white"
                    to="/verifyphone"
                >
                    Número de telefono
                </Link>
            </div>
        </section>
    );
};

export default Login;
