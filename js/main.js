//dom/eventos/storage/json//   
//login

const baseDeDatos = [
    {
        usuario: "EZEQUIEL",
        contrasenia: "CONTRADEEZE"
    },
    {
        usuario: "FEDE",
        contrasenia: "CONTRADEFEDE"
    }

];

const usuarioRegistrado = {
    user: '',
    contra: ''
};

// Autentificacion//

const auth = JSON.parse(localStorage.getItem("user"))
if (auth){
    const divContenedor = document.querySelector("#contenedor");
    divContenedor.classList.add("bg-slate-500");
    divContenedor.innerHTML = `<span class="left-0 text-3xl">Bienvenido ${auth.usuario} </span>`;
};


//funcion toma de datos

function datos(){
const nombreDeUsuario = document.querySelector("#user");
const contraDeUsuario = document.querySelector("#password");
const botonInicioSesion = document.querySelector("#boton-inicio-sesion");


nombreDeUsuario.oninput = (e) => {
    usuarioRegistrado.user = e.target.value.toUpperCase()
};

contraDeUsuario.oninput = (e) => {
    usuarioRegistrado.contra = e.target.value.toUpperCase()
};

botonInicioSesion.onclick = (e) => {

    const validarUsuario = baseDeDatos.find((el) => {
        return usuarioRegistrado.user === el.usuario && usuarioRegistrado.contra === el.contrasenia
    })

    if (validarUsuario) {
        const stringify = JSON.stringify({ usuario: validarUsuario.usuario })
        localStorage.setItem("user", stringify);

        const divContenedor = document.querySelector("#contenedor");
        divContenedor.classList.add("bg-slate-500");
        divContenedor.innerHTML = `<span>Bienvenido ${validarUsuario.usuario} </span>`
    } else {
        const divContenedor = document.querySelector("#contenedor");
        divContenedor.innerHTML = ` <div class="w-full flex flex-col justify-center items-center gap-y-4 m-20 " id="contenedor">

        <h1 class="text-4xl">Bienvenido</h1>
        <span class="bg-red-500 rounded-md p-4">Crendenciales incorrectas, ingrese sus datos nuevamente</span>
        <div class="m-5">
            <input id="user" type="email" placeholder="  Usuario..." class="w-96 h-16 rounded-md caret-slate-500">
        </div>
        <div class="m-5">
            <input id="password" type="password" placeholder="  Contraseña..." class="w-96 h-16 rounded-md caret-slate-500">
        </div>
        <div class="m-5">
            <button id="boton-inicio-sesion" class="border p-2 border-blue rounded-md w-96 h-16md text-xl bg-slate-500 cursor-pointer">Iniciar sesion</button>
        </div>`
        datos(); // loop datos erroneos
    }

}
}
datos(); // llamada 