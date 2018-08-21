import App from './App';
import '../sass/style.scss';
import Module from '../../wasm/add';

document.addEventListener('DOMContentLoaded', () => {
  fetch('./add.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => new Uint8Array(buffer))
    .then(binary => {
      let module;
      const moduleArgs = {
        wasmBinary: binary,
        onRuntimeInitialized: () => {
          document.getElementsByTagName('body')[0].innerHTML = App(
            module.cwrap('add', 'number', ['number', 'number'])
          );
        }
      };
      module = Module(moduleArgs);
    });
});
