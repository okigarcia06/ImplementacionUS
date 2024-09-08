# Trabajo Práctico Número 6

## User story: `Publicar pedido de envío`

*Como* `Dador de Carga`

*quiero* `publicar un pedido de envío`

*para* `recibir cotizaciones de transportistas`

### Criterios de Aceptación:
- Debe seleccionar el tipo de carga (documentación, paquete, granos, hacienda)
- Debe ingresar el domicilio de retiro (calle y número, localidad, provincia y referencia opcional).
- Debe seleccionar la fecha de retiro (mayor o igual a hoy)
- Debe ingresar el domicilio de entrega (calle y número, localidad, provincia y referencia opcional)
- Debe indicar la fecha de entrega (mayor o igual a hoy y mayor o igual a fecha de retiro)
- Debe poder adjuntar, de manera opcional, una o más fotos (jpf o png).
- Debe enviar una notificación PUSH y email de nuevo pedido a todos los transportes que tengan la 
localidad de la dirección de retiro en su zona de cobertura


### Pruebas de Usuario
- Probar crear un pedido de envío con fechas correcta sin fotos (pasa)
- Probar crear un pedido de envío con fechas correcta con fotos (pasa)
- Probar crear un pedido de envío con fechas correcta con observaciones (pasa)
- Probar crear un pedido de envío con fecha de retiro y entrega incorrecta (falla)
- Probar crear un pedido de envío sin completar datos requeridos (falla)
- Probar recepción de email en usuarios transportistas con dirección de retiro o entrega dentro de su zona de cobertura (pasa)
- Probar recepción de notificación PUSH en usuarios transportistas con dirección de retiro o entrega dentro de su zona de cobertura (pasa)
- Probar recepción de email en usuarios transportistas con dirección de retiro y entrega fuera de su zona de cobertura (falla)


## Tecnologías utilizadas

Este proyecto fue creado con [Create React App](https://create-react-app.dev/).

### Correr la aplicación
Instalar Node.js

Abrir la consola/terminal y ejecutar el siguiente comando en la carpeta del proyecto:

```
npm start
```

Corre la aplicación en modo desarrollador.
Abrir [http://localhost:3000](http://localhost:3000) para ver la app en el navegador.

La página se refresca al realizar cambios.
Algunos errores y warnings aparecerán en la consola/terminal.

Ejecutar el siguiente comando para abrir las Stories y visualizar el componente:
```
npm run storybook
```
