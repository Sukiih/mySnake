# Snake Game

Este es un juego clásico de Snake implementado en JavaScript utilizando el elemento `<canvas>` para renderizar el juego. El objetivo es controlar la serpiente para que coma la comida, lo que hará que crezca y aumente tu puntuación. El juego termina si la serpiente choca contra las paredes del lienzo o contra sí misma.

## Características

- **Juego de Snake clásico**.
- **Controles con el teclado**: Usa las flechas del teclado para mover la serpiente.
- **Puntaje**: La puntuación se actualiza cada vez que la serpiente come la comida.
- **Velocidad creciente**: La velocidad de la serpiente aumenta a medida que la puntuación aumenta.

## Instalación y Uso

Puedes jugar al juego directamente en la web sin necesidad de clonar el repositorio. Simplemente visita el siguiente enlace:

- [Jugar Snake Game](https://sukiih.github.io/mySnake/)

Si deseas ejecutar el juego localmente en tu máquina, sigue estos pasos:

1. **Clona el repositorio**:

2. **Abre el archivo `index.html` en un navegador web**. Puedes hacerlo simplemente haciendo doble clic en el archivo, o bien utilizando un servidor local.

3. **Juega**: Usa las teclas de flecha en tu teclado para mover la serpiente. El objetivo es comer la comida que aparece en el lienzo sin chocar contra los bordes o contra ti mismo.

## Código

El juego está implementado en un solo archivo JavaScript (`snake.js`) que se encuentra enlazado en el archivo `index.html`. El código se encarga de:

- Dibujar la serpiente y la comida en el lienzo.
- Manejar el movimiento de la serpiente y la detección de colisiones.
- Actualizar el puntaje y la velocidad del juego.

## Contenido del Proyecto

- `index.html`: Archivo HTML principal que contiene el lienzo para el juego y la referencia al archivo JavaScript.
- `snake.js`: Archivo JavaScript que contiene la lógica del juego.

## Vista del juego

![Captura de pantalla del juego](https://github.com/Sukiih/mySnake/blob/main/assets/snake.png)

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Haz un fork** del repositorio.
2. **Crea una nueva rama** (`git checkout -b feature/nueva-funcionalidad`).
3. **Realiza tus cambios** y realiza un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. **Haz push** a la rama (`git push origin feature/nueva-funcionalidad`).
5. **Abre un Pull Request** en GitHub.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE.txt](https://github.com/Sukiih/mySnake/blob/main/LICENSE.txt) para obtener más detalles.
