# E-commerce Frontend

Este proyecto es un frontend para un e-commerce de una tienda de ropa desarrollado en React. Los usuarios pueden registrarse, iniciar sesión, ver productos, añadirlos al carrito y crear pedidos utilizando una API desarrollada previamente en un proyecto de backend.

![image](https://github.com/sentobc13/Proyecto-ecommerce-react/assets/160127899/36bad38b-fe6d-492b-aab8-01d5034a63b8)

## Caracterís
ticas

- Registro de usuarios.
- Login de usuarios.
- Visualización de productos y añadido al carrito de compra.
- Creación de pedidos.
- Visualización de datos del usuario en el perfil.
- Logout de usuarios.

## Componentes

1. **Register**: Componente para el registro de nuevos usuarios.
   
   ![Captura de pantalla 2024-06-02 232750](https://github.com/sentobc13/Proyecto-ecommerce-react/assets/160127899/49a2ce01-2209-4da2-a2e0-44cc1c17038c)

3. **Login**: Componente para el inicio de sesión de usuarios.
4. **Home**: Componente principal de la aplicación.
5. **Products**: Realiza la petición de productos en `useEffect` y muestra una lista de productos.
   
![Captura de pantalla 2024-06-02 232439](https://github.com/sentobc13/Proyecto-ecommerce-react/assets/160127899/7184e74a-4da6-4363-8ce9-edea9b8cb0e6)

7. **Product**: Componente que muestra el mapa de productos.
8. **Cart**: Componente del carrito de compra.
9. **Profile**: Vista del perfil con los datos del usuario logeado y sus pedidos.
10. **Header**: Encabezado de la aplicación.
11. **Footer**: Pie de página de la aplicación.

## Rutas

- `/home`: Página principal de la aplicación.
- `/login`: Página de inicio de sesión.
- `/register`: Página de registro de usuarios.
- `/profile`: Página de perfil de usuario.

## Tecnologías y Herramientas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Biblioteca para la navegación y enrutamiento en aplicaciones React.
- **Context API**: Manejo de estado global en React.
- **SASS**: Preprocesador CSS para estilos.
- **Ant Design**: Biblioteca de componentes UI.
- **Axios**: Cliente HTTP para realizar peticiones a la API.

## Instalación y Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/sentobc13/Proyecto-ecommerce-react.git
