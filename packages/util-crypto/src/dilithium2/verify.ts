// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

// import nacl from 'tweetnacl';

import { u8aToU8a } from '@polkadot/util';
import { dilithium2Verify as wasmVerify/*, isReady*/ } from '@polkadot/wasm-crypto';

/**
 * @name dilithium2Sign
 * @summary Verifies the signature on the supplied message.
 * @description
 * Verifies the `signature` on `message` with the supplied `publicKey`. Returns `true` on sucess, `false` otherwise.
 * @example
 * <BR>
 *
 * ```javascript
 * import { dilithium2Verify } from '@polkadot/util-crypto';
 *
 * dilithium2Verify([...], [...], [...]); // => true/false
 * ```
 */
export function dilithium2Verify (message: HexString | Uint8Array | string, signature: HexString | Uint8Array | string, publicKey: HexString | Uint8Array | string): boolean {
  const messageU8a = u8aToU8a(message);
  const publicKeyU8a = u8aToU8a(publicKey);
  const signatureU8a = u8aToU8a(signature);

  if (publicKeyU8a.length !== 1312) {
    throw new Error(`Invalid publicKey, received ${publicKeyU8a.length}, expected 1312`);
  } else if (signatureU8a.length !== 2420) {
    throw new Error(`Invalid signature, received ${signatureU8a.length} bytes, expected 2420`);
  }

  //TODO errors
  return wasmVerify(signatureU8a, messageU8a, publicKeyU8a);

//   return !onlyJs && isReady()
//     ? wasmVerify(signatureU8a, messageU8a, publicKeyU8a)
//     : nacl.sign.detached.verify(messageU8a, signatureU8a, publicKeyU8a);
}