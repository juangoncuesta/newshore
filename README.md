este proyecto se trabajo con codequality:

eslint
tslint
editorconfig
cyclomaticcomplexity
husky hooks

se uso el modelo vista con arquitectura microservicios

se uso un login conectado a un api service para que me retornara un token y hacer uso de tokens

se uso guards para proteger las rutas

se uso interceptors

se uso servicios e interfaces



Migracion TSLint a ESLint Angular < v12
Recuerda que estos pasos solo aplica a las versiones que estan antes de la versión 12, ya que esas versiones usaban TSLint y generaban un archivo llamado tslint.json.

Ejecuta el siguiente comando en tu consola

ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config
Cuando termine de ejecutar esos comandos ya puedes eliminar el archivo tslint.json.

Instalación EsLint Angular >= v12
Esta configuración solo aplica si usas angular versión 12 o superior.

ng add @angular-eslint/schematics
más información en: https://github.com/angular-eslint/angular-eslint

Code Quality
Prettier
eslint-config-prettier
eslint-plugin-prettier
Ejecuta el siguiente comando en tu consola

npm install -D prettier eslint-config-prettier eslint-plugin-prettier
Luego dentro de tu archivo .eslinttrc.json agrega lo siguiente en la sección extends de las configuraciones para los archivos .ts Configuración para los archivos TS:

    		"extends": [
			      "plugin:@angular-eslint/recommended",
       			  "plugin:@angular-eslint/template/process-inline-templates",
       			  "eslint:recommended",
       			  "plugin:@typescript-eslint/recommended",
        		  "plugin:@typescript-eslint/recommended-requiring-type-checking",
       			  "plugin:prettier/recommended"
			]
Configuración para los archivos HTML:

	"extends": [
		  "plugin:@angular-eslint/template/recommended",
      "plugin:prettier/recommended"
			],
Si vas usar archivos .spec debes de ignorarlos ya que los archivos de test sirven para realizar simulaciones y el codigo que escribamos puede que no cumpla con las especificaciones de ESLint, para ignorarlos debes de agregar en la sección ignorePatterns lo siguiente:

	"ignorePatterns": ["projects/**/*", "src/app/**/*.spec.ts"],
Configurar archivos Prettier
Debes de crear los siguientes archivos en la raíz de tu proyecto:

.prettierrc
.prettierignore
dentro del archivo .prettierrc coloca lo siguiente:

{
	"arrowParens": "always",
	"bracketSpacing": true,
	"insertPragma": false,
	"printWidth": 100,
	"proseWrap": "preserve",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "none",
	"useTabs": true,
	"endOfLine": "auto"
}
Para evitar formatear algunos archivos podemos hacer uso del archivo .prettierignore, agrega lo siguiente:

node_modules/*
package-lock.json
yarn.lock
src/*.ts
src/index.html
src/environments/*.ts
Recuerda que puedes configurar los atributos a tu gusto, más información en https://prettier.io/playground/

Dentro tu archivo package.json existe una sección llamada scripts, dentro agregaras lo siguiente:

"format": "prettier --write \"./src/**/*.{ts,json,html}\"",
"lint-format": "npm run format &&  ng lint --fix"
Configurar Husky
💣 Alerta!!🚧 Si no se llega a ejecutar Husky al momento de realizar un commit a pesar de que ya agregaste las configuraciones, es debido a la actualización de la librería, para poder solucionar este problema desinstala husky y vuelve a instalar de la siguiente manera:

npm i -D husky@4.3.7 -E
Husky en su versión actual maneja los Hooks de git de una manera muy distinta y a mi parecer lo complicaron todo, prefiero esta manera de trabajar, más información en: https://typicode.github.io/husky/#/

Agrega lo siguiente a tu archivo package.json

	"husky": {
		"hooks": {
			"pre-commit": "npm run lint-format && git add ."
		}
	}
