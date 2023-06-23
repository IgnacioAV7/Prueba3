var modificar = (listadoNuevo)=>{
    let eNombres = document.getElementById("nombres");
    let eApellidos = document.getElementById("apellidos");
    let eFecha = document.getElementById("fecha");
    let eEmail = document.getElementById("email");
    let eDireccion = document.getElementById("direccion");
    let eFono = document.getElementById("fono");
    let eGenero = document.getElementById("genero")
    let eOcupacion = document.getElementById("ocupacion")
    let eBtnEditarUp = document.getElementById('btnEditar');
            
    let nombres = eNombres.value;
    let apellidos = eApellidos.value;
    let fecha = eFecha.value;
    let email = eEmail.value;
    let direccion = eDireccion.value;
    let fono = eFono.value;
    let genero = eGenero.value;
    let ocupacion = eOcupacion.value;
    let indice = eBtnEditarUp.value;
    listadoNuevo[indice].nombres = nombres;
    listadoNuevo[indice].apellidos = apellidos;
    listadoNuevo[indice].fecha = fecha;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].direccion = direccion;
    listadoNuevo[indice].fono = fono;
    listadoNuevo[indice].genero = genero;
    listadoNuevo[indice].ocupacion = ocupacion;
    localStorage.setItem('vehiculos',JSON.stringify(listadoNuevo));
    //Cargar la tabla de nuevo
    cargarTabla(listadoNuevo)
}
var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listadoNuevo)
    lista = listadoNuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return {...p,'id':index}})
    console.log(lista)
    localStorage.setItem('socios',JSON.stringify(lista));
    cargarTabla(lista) 
}



var cargarTabla = (listadoNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombres = document.getElementById("nombres");
    let eApellidos = document.getElementById("apellidos");
    let eFecha = document.getElementById("fecha");
    let eEmail = document.getElementById("email");
    let eDireccion = document.getElementById("direccion");
    let eFono = document.getElementById("fono");
    let eGenero = document.getElementById("genero");
    let eOcupacion = document.getElementById("ocupacion");
    
    render = "<table>"
    render+="<tr><th>Nombres</th><th>Apellidos</th><th>Fecha Nacimiento</th><th>Email</th><th>Direccion</th><th>Fono</th><th>Genero</th><th>Ocupacion</th><th>Accion</th></tr>"
    for (let i = 0; i <listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombres+"</td>"
        render+="<td>"+element.apellidos+"</td>"
        render+="<td>"+element.fecha+"</td>"
        render+="<td>"+element.email+"</td>"
        render+="<td>"+element.direccion+"</td>"
        render+="<td>"+element.fono+"</td>"
        render+="<td>"+element.genero+"</td>"
        render+="<td>"+element.ocupacion+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
        
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i); 
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombres.value = element.nombres;
            eApellidos.value = element.apellidos;
            eFecha.value = element.fecha;
            eEmail.value = element.email;
            eDireccion.value = element.direccion;
            eFono.value = element.fono;
            eGenero.value = element.genero;
            eOcupacion.value = element.ocupacion;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
             
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            eNombres.value = element.nombres;
            eApellidos.value = element.apellidos;
            eFecha.value = element.fecha;
            eEmail.value = element.email;
            eDireccion.value = element.direccion;
            eFono.value = element.fono;
            eGenero.value = element.genero;
            eOcupacion.value = element.ocupacion;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo))
       
            
        })
    }
}

var registrar = ()=>{
    let eNombres = document.getElementById("nombres");
    let eApellidos = document.getElementById("apellidos");
    let eFecha = document.getElementById("fecha");
    let eEmail = document.getElementById("email");
    let eDireccion = document.getElementById("direccion");
    let eFono = document.getElementById("fono");
    let eGenero = document.getElementById("genero");
    let eOcupacion = document.getElementById("ocupacion");
    let nombres = eNombres.value;
    let apellidos = eApellidos.value;
    let fecha = eFecha.value;
    let email = eEmail.value;
    let direccion = eDireccion.value;
    let fono = eFono.value;
    let genero = eGenero.value;
    let ocupacion = eOcupacion.value;
    console.log(nombres);
    console.log(apellidos);
    console.log(fecha);
    console.log(email);
    console.log(direccion);
    console.log(fono);
    console.log(genero);
    console.log(ocupacion);
    let listadoVehiculos = localStorage.getItem("socios");
    let listadoAntiguo = JSON.parse(listadoVehiculos);
    if(listadoAntiguo==null){
        let vehiculo = {"id": 0,"nombres":nombres,"apellidos":apellidos,"fecha":fecha,"email":email,"direccion":direccion,"fono":fono,"genero":genero,"ocupacion":ocupacion}
        listadoNuevo = [vehiculo]
    }else{
        let vehiculo = {"id": listadoAntiguo.length,"nombres":nombres,"apellidos":apellidos,"fecha":fecha,"email":email,"direccion":direccion,"fono":fono,"genero":genero,"ocupacion":ocupacion}
        listadoNuevo = [...listadoAntiguo,vehiculo]
    }
    console.log(listadoAntiguo)
    console.log(listadoNuevo);
    localStorage.setItem("socios",JSON.stringify(listadoNuevo));
    //tabla
    cargarTabla(listadoNuevo)
    //
    
    
   }
var cargarDatos = ()=>{
    let listadoSocios = localStorage.getItem("socios");
    let listadoAntiguo = JSON.parse(listadoSocios);
    cargarTabla(listadoAntiguo)
}
document.getElementById("btn").addEventListener("click",registrar);
addEventListener('load',cargarTabla)

//traemos la funcion enableDarkMode, con document.body controlamos el body de la pagina y el classList.toggle activa y desactiva el modo oscuro
function enableDarkMode(){
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
}

// Obtener el tamaño de fuente actual
let fontSize = parseInt(getComputedStyle(document.body).fontSize);

// Función para aumentar el tamaño de fuente
function increaseFontSize() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + "px";
}

// Función para reducir el tamaño de fuente
function decreaseFontSize() {
  if (fontSize > 8) {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
  }
}

// Event listeners para los botones
document.getElementById("increaseFontBtn").addEventListener("click", increaseFontSize);
document.getElementById("decreaseFontBtn").addEventListener("click", decreaseFontSize);