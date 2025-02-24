// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.js';

import { mldsa44KeypairFromSeed/*, isReady*/} from '@polkadot/wasm-crypto';

/**
 * @name mldsa44PairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { mldsa44PairFromSeed } from '@polkadot/util-crypto';
 *
 * mldsa44PairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function mldsa44PairFromSeed (seed: Uint8Array): Keypair {

    const full = mldsa44KeypairFromSeed(seed);

    return {
      publicKey: full.slice(32),
      secretKey: full.slice(0,32)
    };
}