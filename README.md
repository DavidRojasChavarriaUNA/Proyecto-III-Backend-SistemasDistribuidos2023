# Universidad Nacional 
## Escuela de Informática 
### Sistemas Distribuidos.

#### Proyecto III - back end.

Estudiante: 
David Rojas Chavarría
Cédula
114310962
Profesor:
Armando Arce Orozco.

Ciclo III 2023

Repositorio \
   https://github.com/DavidRojasChavarriaUNA/Proyecto-III-Backend-SistemasDistribuidos2023 \

URL del backend \
   https://proy-iii-faas-drch-sist-dist-una-2023.netlify.app/.netlify/functions

Para ejecutar el proyecto deberá ejecutar los siguientes pasos:

1. ingresar a la consola o terminal y ubicarse en la carpeta del backend \
	ejemplo (en windows)\
		 'cd "C:\Users\drojas\Desktop\Licenciatura UNA\Ciclo II 2023\Sistemas Distribuidos\Sesión 15\Proyecto-III-SistemasDistribuidos2023\Backend"'
	
2. instalar los paquetes de node.js en caso que no los haya instalado. \
	"npm install"

3. instalar el backend en Netlify con la siguiente configuración en el Build settings
   - Runtime: Not set
   - Base directory: /
   - Package directory: Not set
   - Build command: Not set
   - Publish directory: Not set
   - Functions directory: netlify/functions
   - Deploy log visibility: Logs are public
   - Build status: Active

4. Crear la variable de entorno REDIS_DB_URI con el string de conexión a la base de datos de Redis
   REDIS_DB_URI = redis://<REDIS_USER>:<REDIS_PASSWORD>@<REDIS_HOST>:<REDIS_PORT>
   ejemplo: \ 
   redis://default:45d4a5s4d5as64d5as4d@redis-58318.c61.us-east-1-3.ec2.cloud.redislabs.com:58318

Funciones disponibles
- DeleteAlbum : Elimina un álbum
- DeleteComposer : Elimina un compositor
- DeleteMovie : Elimina una película
- GetAlbumById : Obtiene un álbum por Id
- GetComposerById : Obtiene un compositor por Id
- GetMovieById : Obtiene una película por Id
- GetAllAlbumes : Obtiene todos los álbumes
- GetAllComposers : Obtiene todos los compositores
- GetAllMovies : Obtiene todas las películas
- InsertAlbum : Inserta un álbum
- InsertComposer : Inserta un compositor
- InsertMovie : Inserta una película
- UpdateAlbum : Actualiza un álbum
- UpdateComposer : Actualiza un compositor
- UpdateMovie : Actualiza una película