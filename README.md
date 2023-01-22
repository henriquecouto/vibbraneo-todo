# Vibbraneo Todo Web App

This app is built with Vite, React and Typescript.

This is a sample project, so it uses [`json-server`](https://github.com/typicode/json-server) to run http request. Because of that some handlers are needed to parse data in some cases not supported by `json-server`. In a real project, these handlers would be made in backend in a more performant and functional way.

## Folder structure

```
src/
├── screens/
│   ├── home.tsx
│   └── ...
├── features/
│   ├── todo/
│   │   ├── components
│   │   ├── hooks
│   │   ├── context
│   │   ├── layouts
│   │   └── index.ts
│   └── ...
├── services/
│   ├── api.ts
│   └── ...
└── ...
```

## Running

Follow the steps below to run the project on your machine.

Prepare the fake api creating `db.json` file:

```sh
yarn prepare
```

Install dependencies:

```sh
yarn install
```

Run on `localhost`:

```sh
yarn dev
```
