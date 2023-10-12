// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.js';

import { randomAsU8a } from '../../random/index.js';
import { dilithium2PairFromSeed } from './fromSeed.js';

/**
 * @name dilithium2PairFromRandom
 * @summary Creates a new public/secret keypair.
 * @description
 * Returns a new generate object containing a `publicKey` & `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { dilithium2PairFromRandom } from '@polkadot/util-crypto';
 *
 * dilithium2PairFromRandom(); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function dilithium2PairFromRandom (): Keypair {
  return dilithium2PairFromSeed(randomAsU8a());
}