# Hello-serverless

## Installation

Firstly, install NPM packages with `npm install`

- This will install `Axios` as regular dependency and `serverless-offline` plugin as dev-dependency

Assuming you don't have `serverless` globally installed, run `npm install -g serverless`

Configure `serverless.yml` to integrate your serverless dashboard (account?)

- Simply add `org: ${yourFancyUsername}` in `service.yaml` or just run `serverless` to do it interactively

Bonus: Offline support for convenience

- Before deploying your serverless functions, you can try it locally by running `serverless offline start` thanks to the plugin we just installed

## API

- `/` => returns { message: "Hello World" }

- `/ping` => returns { message: "pong" }

- `/person` => returns a random character from SWAPI database

- `/person?id=1` => returns the character with `id` 1 from SWAPI database

hint: There are 88 different people in that API ;)
