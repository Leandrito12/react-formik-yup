import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "el nombre debe tener al menos 3 caracteres")
    .max(20, "el nombre no debe superar los 20 caracteres")
    .required("Revisa el nombre ingresado"),
  apellido: Yup.string()
    .min(3, "el apellido debe tener al menos 3 caracteres")
    .max(20, "el apellido no debe superar los 20 caracteres")
    .required("Revisa el nombre ingresado")
    .required("Revisa el apellido ingresado"),
  email: Yup.string()
    .email("debe ser un email valido")
    .required("Revisa el email ingresado"),
  telefono: Yup.string()
    .min(6, "telefono invalido")
    .max(6, "telefono invalido")
    .required("Revisa el telefono ingresado"),
});
