function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
      return false;
    }
  
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /\d/.test(contrasena);
  
    return tieneMayuscula && tieneMinuscula && tieneNumero;
  }
  

  const contrasenaEjemplo = "MiContrasena123";
  if (validarContrasena(contrasenaEjemplo)) {
    console.log("La contraseña es válida.");
  } else {
    console.log("La contraseña no cumple con los criterios.");
  }
  