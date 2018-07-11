# FeathersJS
## Autodocumentacion con Mongoose y Swagger.
***

### Introduccion:
Hola, soy [Damian](damianm@camba.coop)! Trabajo como desarrollador en [Camba](http://camba.coop/), y en mi tiempo libre soy voluntario en una asociación que rescata animales.  
Adopteitor aspira a ser un sistema integral de control para centros de rescate, ofreciendo una plataforma que permita registrar a los animales, saber en donde están, en que situación, si están en adopción, fueron adoptados, etc. También permite registrar Humanos, estos pueden firmar Contratos de adopción que vinculan al animal con el humano, haciendo fácil llevar un historial del animal y saber con quien está.  
Más informacion sobre el proyecto en el [repositorio](https://github.com/adopteitor/adopteitor-api)!

Inicialmente el proyecto lo hicimos en Django y hace muy poco empezamos a re-hacer la API con FeathersJs, tengo mis modelos definidos en schemas de Mongoose y me pareció que seria interesante poder generar una documentación a partir de esta información.  

Me encontre con una sola librería que parecía ya hacer lo que yo quería:  *[mongoose-to-swagger](https://github.com/giddyinc/mongoose-to-swagger)*.  
Mire el código, se veía limpio y concreto, recibe un schema Mongoose,
analiza su estructura y genera dinámicamente el schema Swagger, que luego usamos para popular las Definitions de la documentación Swagger del servicio...  
<!-- *** -->

### Repositorio:
Pueden encontrar la base para seguir este tutorial en este [repositorio](https://github.com/Cambalab/feathers-mongoose-swagger) en la branch master.  
Tambien pueden ver como queda finalmente [en esta rama](https://github.com/Cambalab/feathers-mongoose-swagger/tree/swagger-in-action).
***

### Instalar y configurar feathers-swagger
> *feathers-swagger* version: 0.7.1  
> [Swagger API](https://swagger.io/docs/)

Empezamos por instalar *feathers-swagger*:

```
npm install --save feathers-swagger
```
Lo importamos en *src/app.js*
```
const swagger = require('feathers-swagger');
```

Luego vamos a configurar feathers-swagger:
> - DocsPath: es la ruta donde vamos a encontrar la documentación: http://127.0.0.1/docs
> - uiIndex: Es el template que usaremos para la UI de swagger, podemos usar un archivo propio, o el default con TRUE.
> - info: Es mejor leer la documentación de swagger para ver todas las opciones disponibles.
>
> [Swagger API: Specification](https://swagger.io/docs/specification/basic-structure/)

```
app.configure(swagger({
  docsPath: '/docs',
  uiIndex: true,
  info: {
    title: 'Test API',
    description: 'Main test API.'
  }
}));
```
***

### Mongoose Schema
> http://mongoosejs.com/docs/api.html#Schema  
Schema Parameters:
- definition «Object»
- [options] «Object»

Antes de empezar, veamos el schema de nuestro modelo Mongoose y prestemos atención no solo a las definitions,  sino también a las options:

> src/models/animal.model.js

```
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const animal = new Schema({
    stage: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    entryDate: {
      type: Date,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
    versionKey: false
  });
};

```
En las *options*, definimos *versionKey* en *false* para que no aparezca el campo *__v* en nuestro schema de *swagger*.  
De igual manera podríamos agregar "*_id: false*" a las *options* si así lo deseáramos.  
Finalmente creamos y exportamos un modelo *Mongoose* en base a nuestro schema.
```
return mongooseClient.model('animal', animal);
```
***

### Incluir *mongoose-to-swagger* al proyecto
Instalamos *mongoose-to-swagger* utilizando NPM.
```
npm install --save mongoose-to-swagger
```
Veamos ahora el servicio
> src/services/animal/animal.service.js

```
const createService = require('feathers-mongoose');
const createModel = require('../../models/animal.model');
const hooks = require('./animal.hooks');
const m2s = require('mongoose-to-swagger');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
      Model,
      paginate
    },
    animalService = createService(options);

  animalService.docs = {
    description: 'A service to manage animals',
    definitions: {
      animals: m2s(Model)
    }
  };

  // Initialize our service with any options it requires
  app.use('/animal', animalService);

  // Get our initialized service so that we can register hooks
  const service = app.service('animal');

  service.hooks(hooks);
};

```
Incluimos *mongoose-to-swagger* y le llamamos m2s
```
const m2s = require('mongoose-to-swagger');
```
Refactorisamos un poco el codigo, definimos primero un servicio llamado *animalService*
```
animalService = service(options);
```
Definimos la propiedad *docs* de nuestro *animalService*, lo describimos y llamamos a *mongoose-to-swagger*, le pasamos el modelo del animal y lo asignamos en las *definitions*.
```
animalService.docs = {
  description: 'A service to manage animals',
  definitions: {
    animals: m2s(Model)
  }
};
```
Usamos el servicio con la documentacion.
> **app.use(path, service)**  
> app allows registering a service object on a given path.  
> [FeathersJS API: app](https://docs.feathersjs.com/api/application.html)

```
app.use('/animals', animalService);
```
***


### Listo!
Vamos a navegar a http://127.0.0.1/docs con nuestro navegador favorito y vamos a poder encontrar algo así:

![a](https://image.ibb.co/bzLHbd/adopteitor_api_swagger.png)

Increíble! Todos nuestros servicios aparecen en la documentación!  
Veamos que métodos tiene disponible el servicio *animals*:

![a](https://image.ibb.co/fMTW2J/adopteitor_api_swagger_methods.png)

Podemos hacer un *get* desde la UI y si nuestra aplicación esta correctamente configurada, vamos a poder utilizar la API realmente.

![a](https://image.ibb.co/kPos9y/adopteitor_api_swagger_get.png)

Y ver las respuestas y mas

![a](https://image.ibb.co/ifuX9y/adopteitor_api_swagger_get_response.png)

Podemos ver el modelo y saber que datos necesitamos para un post:

![a](https://preview.ibb.co/cpmb2J/adopteitor_api_swagger_post.png)
***

### Gracias
Bueno, esto fue todo, cualquier duda o corrección, sera mas que bienvenida!  
Les dejo un link al repo de github por si tienen alguna duda sobre la implementación:
[Adopteitor @ github](https://github.com/adopteitor/adopteitor-api/tree/e062f234ae36893a2cf0453ff096fd48e01f9d40/)
