const usuario = {
    nombre: "Juan"
  };
  
  // Esto funciona?
  usuario.nombre = "Diego";

  document.write("En otras circustancias, el valor de nombre si se podría cambiar ya que es una variable normal,<br>"+
                "pero como forma parte de uan constante, y estas no pueden cambiar el valor, el código daría error.");