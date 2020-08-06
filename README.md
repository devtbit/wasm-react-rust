# Playground for React + Rust WASM

This is a playground project to develop a React application with Rust WASM modules. The React project was initialized with `create-react-app` and ejecting to `webpack` is not required.

### Requirements

1. Node / NPM
2. Rust / Cargo
3. `wasm-pack`

Refer to Node & Rust documentation for installation.

### Install `wasm-pack`

```
npm install -g wasm-pack --unsafe-perm=true
```

### Install project dependencies

```
npm install
```

### Run

```
npm run start
```

### Add more Rust modules

Anywhere inside your `src` folder of the React project:

```
wasm-pack new <your-module>
```

Implement your module and then you can import your module in any of your components with a relative path:

```
import("../path/to/my/module").then(rustModule => {
  ...
})
```

Don't forget to add your module in the plugins configuration of `config-overrides.js` file:

```
config.plugins = (config.plugins || []).concat([
  ...,
  new WasmPackPlugin({
    ...,
  }),
  ...,
])
```

### References

[1] https://dev.to/lokesh007/webassembly-with-rust-and-react-using-create-react-app-67

[2] https://rustwasm.github.io/
