# 🔲 Button Component - Lemon Energia UI Library

Welcome to my solution of Lemon Energia's Front-End test! 🤓
<br>
<br>
You can access the production build [here](https://teste-lemon-one.vercel.app/).

## 🔧 Environment setup

In order to have full access to the code, run:

#### `git clone https://github.com/joaodslourenco/teste-lemon`

#### `cd teste-lemon`

#### `code .`

Inside VS Code, simply run:

#### `npm install`

Wait until the dependencies are installed, and then you're ready to go!

## 👨‍💻 Starting the development server

You can start the development server by running:

#### `npm start`

<br>

# How to use Button component

To implement Button component into your project you'll need to add the import:

```jsx
import Button from './components/Button'
```

After adding import into your project you can use it simply like:

```jsx
<Button>Hello World!</Button>
```

## Props

Table below contains all types of the props available in Button component.

| Name     | Type              | Default     | Description                                                                     |
| :------- | :---------------- | :---------- | :------------------------------------------------------------------------------ |
| color    | `string`          | `"primary"` | Sets the color scheme preferred.                                                |
| icon     | `string`          |             | Sets the icon preferred. Receives "none", "arrow-right", "refresh" and "check". |
| disabled | `boolean`         | `false`     | Defines whether the Button can be clicked or not.                               |
| children | `React.ReactNode` |             | Allows the component to receive content inside.                                 |
| onClick  | `function`        |             | Receives a function to be executed when user clicks the button.                 |
