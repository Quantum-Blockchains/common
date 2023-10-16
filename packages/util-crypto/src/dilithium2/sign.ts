// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Keypair } from '../types';

// import nacl from 'tweetnacl';

import { u8aToU8a } from '@polkadot/util';
import { dilithium2Sign as wasmSign/*, isReady*/ } from '@polkadot/wasm-crypto';

/**
 * @name dilithium2Sign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { dilithium2Sign } from '@polkadot/util-crypto';
 *
 * dilithium2Sign([...], [...]); // => [...]
 * ```
 */
export function dilithium2Sign (message: HexString | Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>): Uint8Array {
  if (!secretKey) {
    throw new Error('Expected a valid secretKey');
  }

  const messageU8a = u8aToU8a(message);

// TODO
  return wasmSign(publicKey as Uint8Array, secretKey as Uint8Array, messageU8a);

//   return isReady()
//     ? wasmSign(publicKey as Uint8Array, secretKey.subarray(0, 32), messageU8a)
//     : nacl.sign.detached(messageU8a, secretKey);
}
