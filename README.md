# Amigo-Secreto-OracleOne
Este proyecto permite agregar nombres a una lista de amigos y seleccionar un “amigo secreto” de forma aleatoria. Está desarrollado en JavaScript y utiliza elementos del DOM para interactuar con el HTML.

---

## Tabla de Contenidos
- [Descripción](#descripción)  
- [Instalación](#instalación)  
- [Uso](#uso)  
- [Funciones Principales](#funciones-principales) 

---
## Descripción
El proyecto permite:  
- Agregar nombres a una lista de amigos.  
- Mostrar la lista de amigos en la página web.  
- Sortear un amigo secreto de manera aleatoria.  
- Limpiar el campo de entrada para agregar nuevos nombres.  

---

## Instalación
No se requieren dependencias externas. Solo necesitas un navegador moderno que soporte JavaScript.

1. Clonar o descargar el proyecto.  
2. Abrir el archivo `index.html` en tu navegador. 

## Uso
1. Escribir el nombre del amigo en el campo de texto.  
2. Hacer clic en el botón **Agregar Amigo** para añadirlo a la lista.  
3. La lista de amigos se mostrará en pantalla.  
4. Hacer clic en **Sortear Amigo** para seleccionar un amigo secreto aleatorio.

## Funciones Principales
1. AgregarAmigo()
- Obtiene el valor del campo de entrada.
- Verifica que no esté vacío.
- Añade el nombre al arreglo listaNombresSorteados.
- Actualiza la lista mostrada en pantalla.

2. actualizaLista()
- Limpia la lista visual en el HTML (innerHTML = "").
- Recorre el arreglo listaNombresSorteados y crea un <li> por cada nombre.

3. sortearAmigo()
- Verifica que la lista no esté vacía.
- Genera un número aleatorio con Math.floor(Math.random() * listaNombresSorteados.length).
- Muestra en pantalla el nombre del amigo secreto seleccionado.

4. limpiarCaja()
- Limpia el campo de entrada de texto después de agregar un nombre.

## Ejemplo de uso
![Untitled video - Made with Clipchamp](https://github.com/user-attachments/assets/d90ac2bc-c1d0-43be-ade6-897107392c9b)

