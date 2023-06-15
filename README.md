# Burger Queen (API Client)

## Índice

* [0. Preambulo](#1-preambulo)
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Herramientas usadas](#2-herramientas-usadas)
* [3. Caracteristicas generales](#3-caracteristicas-generales)
* [4. Funcionalidad](#4-funcionalidad)
* [5. Despliegue](#5-despliegue)
* [6. Recursos](#6-recursos)

***

## 0. Preambulo

Este proyecto fue reconstruido del siguiente repositorio [Burger-Queen](https://github.com/AlexVYard/DEV004-burger-queen-api-client) usando vite en lugar de create-app-react

***

## 1. Resumen del proyecto

App para uso en restaurante, cuenta con vistas de uso para los meseros, cocineros y administradores.

***

## 2. Herramientas usadas

### HTML

### CSS

### JavaScript

### Git y GitHub

### React

***

## 3. Caracteristicas generales

* Se a usado React como framework.
* El proyecto usa un API Mock para la base de datos.
* Se a considerado principalmente su uso en tablet.
* Cuenta con test unitarios en el repositorio pasado. [Aquí](https://github.com/AlexVYard/DEV004-burger-queen-api-client) usando vite en lugar de create-app-react

***

## 4. Funcionalidad

El producto cuenta con 4 vistas una para cada cargo (mesero, cocinero y administrador) y otra para hacer "login", cada vista cuenta con su funcionalidad respectiva.

### Login

* Logo de la compañia.
* Casillas de texto para ingresar e-mail y contraseña.
* Mensajes de error comprensibles.
* Te lleva inmediatamente a la vista de menu al ingresar.

### Menu

* Filtro para visualizar solo los productos del desayuno, almuerzo/cena o todos.
* Cuadros para cada producto que cuenta con imagen, nombre del producto, precio y boton para agregar productos de forma unitaria.
* Casilla para nombre del cliente.
* Cuadro para ver el resumen y el total de la compra.
* Una ves agregados los productos se pueden agregar mas y remover del resumen de forma unitaria o remover en su totalidad.
* Boton para enviar productos a la cocina.

### Cocina

* Cuadros para visualizar cada producto que llega a cocina.
* Botones para marcar cuando un producto esta listo para ser enviado a mesa o para marcar si ya a sido entregado a la mesa.

### Oficina

* Header para visualizar trabajadorxs o productos.

### Trabajadores

* Cuadros para ver listado de trabajadorxs.
* Cada cuadro contiene botones para editar datos de los trabajadorxs o eliminarlos.
* Cuadro para agregar trabajadorxs.

### Productos

* Cuadros para ver listado de productos.
* Cada cuadro contiene botones para editar datos de los productos o eliminarlos.
* Cuadro para agregar productos.

***

## 5. Despliegue

El proyecto desplegado y su mock respectivo se puede encontrar en los siguientes links:

* [App](https://burger-queen-new.vercel.app/)
* [Mock](https://burger-queen-api-mock-alexa.glitch.me/)

***

## 6. Recursos

* [Routeing](https://www.youtube.com/watch?v=Ul3y1LXxzdU)
* [Navigate](https://stackoverflow.com/questions/64838587/how-to-properly-use-usehistory-from-react-router-dom)
* [Style editing with onClick](https://bobbyhadz.com/blog/react-change-style-on-click)
* [Protected routes](https://www.youtube.com/watch?v=2k8NleFjG7I)
* [Solution to testing in React](https://testing-library.com/docs/react-testing-library/intro/#the-problem)
* [Current date](https://stackoverflow.com/questions/43744312/react-js-get-current-date)
* [Data fetch](https://www.developerway.com/posts/how-to-fetch-data-in-react)
* [Loops](https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react)
* [Spread operator (...)](https://fjolt.com/article/javascript-three-dots-spread-operator)
* [Router testing](https://testing-library.com/docs/example-react-router/)
* [waitFor](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor)
* [Select option testing](https://stackoverflow.com/questions/57946870/how-to-select-an-option-from-a-select-list-with-react-testing-library)
* [Clear input box](https://timmousk.com/blog/react-clear-input/#:~:text=The%20easiest%20way%20to%20clear%20an%20uncontrolled%20input%20is%20to,current.)
