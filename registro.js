function registrarUsuario(correo, clave) {
  if (!correo || !clave) {
    return "Faltan datos";
  }
  if (clave.length < 8) {
    return "La clave debe tener minimo 8 caracteres";
  }
  return "Usuario registrado";
}
