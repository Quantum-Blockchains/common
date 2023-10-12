// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types';

import { dilithium2KeypairFromSeed/*, isReady*/} from '@polkadot/wasm-crypto';

/**
 * @name dilithium2PairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { dilithium2PairFromSeed } from '@polkadot/util-crypto';
 *
 * dilithium2PairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function dilithium2PairFromSeed (seed: Uint8Array): Keypair {
//   if (isReady()) {
    const full = dilithium2KeypairFromSeed(seed);

    return {
      publicKey: full.slice(2528),
      secretKey: full.slice(0,2528)
    };
//   }
  // TODO: return error
//   return nacl.sign.keyPair.fromSeed(seed);
}