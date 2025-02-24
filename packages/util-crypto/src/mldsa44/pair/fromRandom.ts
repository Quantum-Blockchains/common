// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.js';

import { randomAsU8a } from '../../random/index.js';
import { mldsa44PairFromSeed } from './fromSeed.js';

/**
 * @name mldsa44PairFromRandom
 * @summary Creates a new public/secret keypair.
 * @description
 * Returns a new generate object containing a `publicKey` & `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { mldsa44PairFromRandom } from '@polkadot/util-crypto';
 *
 * mldsa44PairFromRandom(); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function mldsa44PairFromRandom (): Keypair {
  return mldsa44PairFromSeed(randomAsU8a());
}