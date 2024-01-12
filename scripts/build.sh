#!/usr/bin/env bash
mkdir tmp && cd tmp
git clone https://github.com/Quantum-Blockchains/wasm.git
cd wasm
git checkout kostia/v7.2.1
yarn install
./scripts/install-build-deps.sh
yarn build
rm -r ../../node_modules/@polkadot/wasm-bridge
rm -r ../../node_modules/@polkadot/wasm-crypto
rm -r ../../node_modules/@polkadot/wasm-crypto-asmjs
rm -r ../../node_modules/@polkadot/wasm-crypto-init
rm -r ../../node_modules/@polkadot/wasm-crypto-wasm
rm -r ../../node_modules/@polkadot/wasm-util
cp -r packages/wasm-bridge/build ../../node_modules/@polkadot/wasm-bridge
cp -r packages/wasm-crypto/build ../../node_modules/@polkadot/wasm-crypto
cp -r packages/wasm-crypto-asmjs/build ../../node_modules/@polkadot/wasm-crypto-asmjs
cp -r packages/wasm-crypto-init/build ../../node_modules/@polkadot/wasm-crypto-init
cp -r packages/wasm-crypto-wasm/build ../../node_modules/@polkadot/wasm-crypto-wasm
cp -r packages/wasm-util/build ../../node_modules/@polkadot/wasm-util
cd ../../
rm -r -f tmp
yarn build:common