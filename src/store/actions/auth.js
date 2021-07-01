import Swal from "sweetalert2";
import { app, auth, googleAuthProvider } from "../../firebase/firebaseconfig";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import { types } from "../types/types";




const signInWithGoogle = () => {
    return (dispatch) => {
        auth.signInWithPopup(googleAuthProvider).
            then(({ user }) => {
                const newUser = {
                    name: user.displayName,
                    photo: user.photoURL,
                    email: user.email,
                    telefono: user.phoneNumber
                }
                dispatch(signUpWithG(newUser))
                return user;
            })
            .catch((error) => {
                return { error }
            })
    }
};
const signUpWithG = (user) => {
    return async (dispatch) => {
        try {
            const res = await fetchSinToken("http://localhost:5000/user/signUpWithG", { ...user, estado: true, rol: 2, localidad: 2 }, "POST");
            const body = await res.json();
            if (body.ok == true) {
                dispatch(signInWithG(user))
            } else if (body.ok == false) {
                dispatch(signInWithG(user))
            } else {
                Swal.fire("Usuario No Registrado", "No se pudo insertar el usuario", "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }
    }
}
const signInWithG = (user) => {
    return async (dispatch) => {
        try {
            const res = await fetchSinToken("http://localhost:5000/user/signInWithG", { email: user.email }, "POST");
            const body = await res.json();
            if (body.ok) {
                dispatch(setUser(body))
            } else {
                Swal.fire("Usuario No Registrado", "Cosoooo", "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }
    }
}

const signUpBackend = (user) => {
    return async (dispatch) => {
        try {
            const res = await fetchSinToken("http://localhost:5000/user", { ...user, estado: true, rol: 2, localidad: 2, esemprendedor: (user.esemprendedor == "true") }, "POST");
            const body = await res.json();
            if (body.ok) {
                Swal.fire("Usuario Registrado correctamente", "Se inserto correctamente el usuario", "success");
                localStorage.setItem("token", user?.token)
                dispatch(signUp(user))
            } else {
                Swal.fire("Usuario No Registrado", "No se pudo insertar el usuario", "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }
    }
}

const signInBackend = (user) => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken("http://localhost:5000/user/login", { ...user }, "POST");
            const body = await resp.json();
            if (body.ok) {
                delete user.password
                delete user.password1
                delete user.password2
                delete body.ok
                dispatch(setUser(body))
            } else {
                Swal.fire("Credenciales", body.msg, "error");
            }
        } catch (error) {
            console.log(error);
            Swal.fire("Error", "No se pudo hacer su accion, contacte con el desarrollador", "error");
        }

    }
}

const signUp = (user) => {
    return (dispatch) => {
        auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(async (userCredential) => {
                if (userCredential.user.uid) {

                    dispatch(signInBackend(user))

                }
            })
            .catch((error) => {
                return { error };
            });
    }
};

//---------------------Actions Redux ------------------------

const setUser = (user) => {
    return {
        type: types.setUser,
        payload: user
    }
}
const clearUser = () => {
    localStorage.clear()
    return {
        type: types.loggout
    }
}

export {
    signUp, signInWithGoogle, signUpBackend, signInBackend, setUser, clearUser
}
