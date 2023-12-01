# PARA CORRER EL SERVIDOR LOCAL

1. Instalar NodeJS (https://nodejs.org/en) y VS Code (https://code.visualstudio.com/download)
2. Abir VS Code
3. Darle a "clone github repository" y pegar `https://github.com/eNeistadt/back-neilo`
4. Abrir la terminal (CTRL ñ)
5. Ejecutar el comando `npm install`
6. Ejecutar `npm start`

### Estructura de la base de datos.

Lenguaje: MongoDB.

#### Usuario.

```javascript
    {
        name: String,
        email: String,
        password: String,
        telefono: String,
        titulo: String,
        experiencia: String,
        imagen: String
    }
```


```javascript
Servicios
    {
        userid: String,
        serviceid: String,
        nombreservicio: String,
        alumno: String,
        texto: String,
        titulo: String,
        calificacion: Number,
        estado: String,
        fecha: String
    }

```

#### Contratos.

#### Mensajes.

#### Comentarios.