# E-commerce Frontend

Este proyecto es un frontend para un e-commerce de una tienda de ropa desarrollado en React. Los usuarios pueden registrarse, iniciar sesión, ver productos, añadirlos al carrito y crear pedidos utilizando una API desarrollada previamente en un proyecto de backend.

## Características

- Registro de usuarios.
- Login de usuarios.
- Visualización de productos y añadido al carrito de compra.
- Creación de pedidos.
- Visualización de datos del usuario en el perfil.
- Logout de usuarios.

## Componentes

1. **Register**: Componente para el registro de nuevos usuarios.
2. **Login**: Componente para el inicio de sesión de usuarios.
3. **Home**: Componente principal de la aplicación.
4. **Products**: Realiza la petición de productos en `useEffect` y muestra una lista de productos.
5. **Product**: Componente que muestra el mapa de productos.
6. **Cart**: Componente del carrito de compra.
7. **Profile**: Vista del perfil con los datos del usuario logeado y sus pedidos.
8. **Header**: Encabezado de la aplicación.
9. **Footer**: Pie de página de la aplicación.

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
