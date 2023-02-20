# 🚀 DeviApp - Backend

DeviApp, project developed for BCNC Group.

## Demo link:

Access the demo at [here](https://inditex-frontend.vercel.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Tests](#tests)
- [Deployment](#deployment)
- [Approach](#approach)
- [Credits](#credits)
- [License](#license)

## Screenshots

Products page

![Products page](https://i.imgur.com/EEcUJkj.png)

Product detail page

![Product detail page](https://i.imgur.com/ibQt02c.png)

Product Add to cart

![Product add to cart](https://i.imgur.com/7ZOyvb1.png)

Loading products

![Loading products](https://i.imgur.com/Gfn8fB6.png)

Empty products list

![Empty products list](https://i.imgur.com/ur6zZ5D.png)

## About The App

`DeviApp - Frontend` is a smartphone shop for BCNC group developed with by Adrián Coll ❤️

The project handles a lists of smartphones and its cart using `ContextAPI` and some custom `hooks`.

## Technologies

I used [`Vite`]('vitejs.dev') as the packager, with `ReactJS` without typescript for faster development.

📚 Some libraries i used:

- `React hook form`: Adding product to cart
  - `yup`: Validating form fields
- `React router dom`: Creating the routes
- `Axios`: Api services
  - `axios-cache-plugin`: Axios cache plugin for requests
- `Vitest`: Testing
  - `React testing library`: Testing library for react
- `JS-Cookie`: Cookies persisting

For the data managment i've used NoSQL with Mongodb, and `Mongoose` ORM.

## Setup

1. Download or clone the repository
2. Install dependencies:

```bash
# npm
npm run install
# yarn
yarn install
# pnpm
pnpm install
```

3. Clone `.env.local.template` and rename to `.env`
4. Set the `VITE_API_URL` to you'r backend server.
5. Run `npm start` to start dev mode
6. Run `npm build` to build the app

## Tests

Stack used:

- Vitest
- React Testing Library

How to run tests:

```bash
npm test
```

> Take a brief look at `./utils/test-utils.tsx`

## Deployment

To deploy the application I have chosen Vercel as usual.

I think Vercel is the best [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service), for its dynamism and ease of deployment in a matter of seconds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fadriancoll%2Finditex-front&env=VITE_API_URL)

> How to deploy:

```bash
# development deploy
vercel
# production deploy
vercel --prod
```

## Approach

I have used the model view controller [MVC](`https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.html`) to build all the file routing/architecture.

This coupled with the `Mongoose ORM` models to facilitate document manipulation.

## Credits

List of contriubutors:

- [Adrián Coll](adriancoll.dev)

## License

MIT license @ [author](author.com)
