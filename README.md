# GasYa

Este proyecto fue diseñado para el curso Desarrollo de Aplicaciones Open Source - SV52

## Integrantes

  - Arrunátegui Aguilar, Josué David  (U202111033)
  - Li Zegarra, Xiao Lian             (U202118784)
  - Estrada Cajamune, Abraham Andrés  (U202112164)
  - Chero Emé Eduardo André           (U20201F282)
  - Mayurí Armas, Jose Carlo          (U202011437)

## Descripción

GasYa es una aplicación web que permite a los usuarios encontrar una estación de combustible más cercana a su ubicación, además de poder visualizar los precios de los combustibles que se encuentran en dicha estación.

## Funcionalidades

  - Visualizar estaciones de combustible cercanas a la ubicación del usuario.
  - Visualizar precios de los combustibles de las estaciones cercanas.

## Servicios a utilizar

Para el desarrollo de la aplicación se utilizarán los siguientes servicios:

  - Google Maps API
  - Google Places API

## Tecnologías a utilizar

Para el desarrollo de la aplicación se utilizarán las siguientes tecnologías:

  - Angular
  - Firebase

## Requerimientos

  - Node.js
  - Angular CLI
  - Firebase CLI

## Complementos

  - Angular Material
  - Tailwind CSS
  - Json-server

## Base de datos

  - Firebase Firestore
  - MySQL

## Json de prueba

Para hacer las pruebas de registro y acceso se uso de un Json de prueba, el cual se encuentra en la carpeta "./server" con el nombre "db.json". Para ejecutar el servidor de pruebas se debe ejecutar el siguiente comando:

```sh  
$ cd server
$ json-server --watch db.json
```

# Especificaiones extras

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
