
# 🗒️ Notes App

## 📖 Descripción

Notes App es una aplicación web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y eliminar notas, así como clasificarlas en diferentes categorías (Personal, Trabajo, Estudio, Ideas, Proyecto). La interfaz es intuitiva y moderna, lo que permite a los usuarios concentrarse en lo que realmente importa: organizar sus pensamientos y tareas.

## ⚙️ Tecnologías Utilizadas

- **Frontend**: 
  - ![React](https://img.icons8.com/color/48/000000/react-native.png) React
- **Backend**: 
  - ![Python](https://img.icons8.com/color/48/000000/python.png) Python
  - ![Flask](https://img.icons8.com/ios-filled/50/000000/flask.png) Flask
- **Base de Datos**: 
  - ![MySQL](https://img.icons8.com/color/48/000000/mysql-logo.png) MySQL

## 🚀 Guía de Uso

Sigue los siguientes pasos para clonar el proyecto y ejecutarlo localmente:

1. **Clona el repositorio**:
   Abre tu terminal y ejecuta el siguiente comando:
   ```bash
   git clone https://github.com/tu_usuario/notes-app.git
   ```
   Asegúrate de reemplazar `tu_usuario` con tu nombre de usuario de GitHub.

2. **Navega al directorio del proyecto**:
   ```bash
   cd notes-app
   ```

3. **Instala las dependencias del frontend**:
   Ve al directorio del cliente de React y ejecuta:
   ```bash
   cd client
   npm install
   ```

4. **Instala las dependencias del backend**:
   Regresa al directorio raíz y luego ve al directorio del servidor:
   ```bash
   cd server
   pip install -r requirements.txt
   ```

5. **Configura la base de datos**:
   - Asegúrate de tener MariaDB instalado y ejecutándose.
   - Crea una base de datos llamada `notes_app` y aplica las migraciones necesarias.

6. **Ejecuta el servidor**:
   En el directorio del servidor, ejecuta:
   ```bash
   python app.py
   ```
   Esto iniciará el backend en el puerto 5000.

7. **Ejecuta la aplicación React**:
   En el directorio del cliente, ejecuta:
   ```bash
   npm start
   ```
   Esto abrirá la aplicación en tu navegador por defecto en `http://localhost:3000`.

8. **¡Listo!** Ahora puedes usar la aplicación para gestionar tus notas.

## 📄 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor abre un *pull request* o *issue*.

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

- **Autor**: Yerson Rodriguez
- **Email**: rodriguezyerson2005@gmail.com
- **GitHub**: [YersonRodriguez2005](https://github.com/YersonRodriguez2005)
