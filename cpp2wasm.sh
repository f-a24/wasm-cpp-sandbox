emcc wasm/add.cpp \
    -s WASM=1 \
    -s "MODULARIZE=1" \
    -s "EXPORTED_FUNCTIONS=['_add']" \
    -s "DEMANGLE_SUPPORT=1" \
    -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap']" \
    -o wasm/add.js && \
echo 'export default Module;' >> wasm/add.js
mv 'wasm/add.wasm' 'docs/add.wasm'