# Minimo 2 EA
## Javier Ramirez

##Descripción
En esta rama se encuentra mi mínimo 2 de la asignatura de EA, en este caso, se pedía realizar una mejora en la que el usuario sea capaz de acceder a una ventana extra en el chat que le permita ver los usuarios que pertenecen a ese chat y ver su estado de conexión (verde/rojo en caso de conectado/no conectado)

##Estado
Al momento de finalizar el mínimo, la implementación no está completa y unicamente permite acceder a los nombres de los usuarios conectados, debido a problemas de implementación de los sockets, funciona a base de http y un nuevo atributo en la clase usuario que permite conocer si esta conectado o no:
```bash
conected:
{
        type: String
},
```
En un futuro se espera utilizar este codigo cambiando a la conexión con sockets.

Per Javier Ramirez.
[Click aqui per accedir al repo de frontend](https://github.com/alexmoyasanchez/Proyecto-EA-Frontend/tree/JaviMinimo2)
