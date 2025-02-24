// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.js';

import { stringToU8a } from '@polkadot/util';

import { blake2AsU8a } from '../../blake2/asU8a.js';
import { mldsa44PairFromSeed } from './fromSeed.js';

/**
 * @name mldsa44PairFromString
 * @summary Creates a new public/secret keypair from a string.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { mldsa44PairFromString } from '@polkadot/util-crypto';
 *
 * mldsa44PairFromString('test'); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function mldsa44PairFromString (value: string): Keypair {
  return mldsa44PairFromSeed(
    blake2AsU8a(
      stringToU8a(value)
    )
  );
}