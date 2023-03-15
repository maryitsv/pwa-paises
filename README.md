# Paises

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

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


## pwa
add the library
`
ng add @angular/pwa 
`

to see the angular application with the pwa we need to create a production build
`
ng build --configuration=production
cd dist/paises
http-server 
`

Now let review the app and understand a little the configuracion

Review the ngsw-config.json 
configure the assetGroups.urls to cache the urls like flags and like libraries
create a new section to cache api calls dataGroups
`
 "urls": [
          "https://flagcdn.com/**",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        ]

...

  "dataGroups": [
    {
      "name": "pais-api",
      "urls": ["https://restcountries.com/v2/lang/es"],
      "cacheConfig": {
        "maxSize": 5,
        "maxAge": "1h",
        "timeout": "5s",
        "strategy": "freshness"
      }
    }
  ]       
`
