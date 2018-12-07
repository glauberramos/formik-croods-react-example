# instructions on creating this project from zero

- run `create-react-app project-name`
- `yarn add croods`
- `yarn add redux`
- `yarn add react-redux`
- `yarn add redux-devtools-extension`
- `yarn add redux-logger`
- `yarn add redux-thunk`
- copy folder `store` from another project with all files
- inside `rootReducer.js` add `todos` (this will be the name used on the api and on redux)
- add `CroodsProvider` and `Provider` on `App.js`, `baseUrl` should be your api URL

## Listing Todos

- create a file for listing TODOs, use `Info` from `croods`

## Create Todos

- `yarn add formik`
- create a file for creating TODOs, use `New` from `croods`
