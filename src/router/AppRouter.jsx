import { Route, Routes } from "react-router-dom"
import { Main } from "../pages/main/Main";
// import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
// import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

// CAMBIAR "LoginPage" por "AuthPage"
import { LoginPage } from "../auth/pages/LoginPage";

// Hacer la importacion, pero primero la exportacion por BARRILS
import { ForgotPassword } from "../auth/components/ForgotPassword";
import { CreateAccount } from "../auth/components/CreateAccount";

import { App } from "../pages/main/app/App";

export const AppRouter = () => {
  return (
    <>
        <Routes>
          
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/recoverPass" element={<ForgotPassword/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          <Route path="/app" element={<App/>}/>
          <Route path="/*" element={<Main/>}/>
          {/* <Route path="/" element={
            <PublicRoute>
              <Main/>
            </PublicRoute>
          }
          /> */}

          {/* ASÍ REALIZO EL RUTEO PRIVADO */}
          {/* <Route path="/*" element={<HeroesRoutes />}/> */}
          {/* <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } /> */}

        </Routes>
    </>
  )
}


/*
NOTAS:

---> Normalmente se trabaja el ruteo, rutas, adentro de una carpeta llamada 'router' en la cuál tendremos un Componente 
     que será el que tendrá nuestras rutas PRINCIPALES/ESENCIALES al cuál se lo suele llamar 'AppRouter.jsx'.

---> Este es mi ruteo principal el cuál aparecerá al entrar a mi aplicación web, en el cual me piden loguearme/autentificarme
     UNA VEZ IDENTIFICADO podré ver el navbar/ruteo que se encuentra en "HeroesRoutes"

*/
