# Documentacion API

En la carpeta Schema creamos nuestra colección que va a estar en nuestra base de datos con sus respectivas propiedades:

- Schema Publication
- Schema User

En la carpeta Repositories hacemos la lógica de la petición que queremos hacer con nuestra base de datos a través de Mongoose y el modelo que creamos (PostModel o UserModel) y cómo queremos devolverla en el servidor:

- get
- post
- put
- delete

En la carpeta controllers hacemos la lógica de los endpoints que queremos utilizar. Aquí vamos a recibir datos de parte del cliente (request y response) y poder usar esa información para poder mandarla al servidor.

En la carpeta routes creamos un archivo del respectivo modelo y creamos la "ruta" a la que debemos acceder para hacer una petición de tipo get, post, put o delete del lado del servidor.

Luego, exportamos un Router que contenga todas esas rutas y funcionalidades al archivo index.js, que a través del path que le demos va a acceder a las distintas rutas del modelo.

javascript
Copy code
import { Router } from "express";
import userRoutes from "./user.js"
import authRouter from "./auth.js";
import router from "./publications.js";
import postRoutes from "./publications2.js";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/auth", authRouter)
routes.use("/posts", router)
routes.use("/posts2", postRoutes)

export default routes
IMPORTANTE:
Hubo un problema con la funcionalidad POST de publication, y se creó una ruta aparte solo para esa llamada y funciona
