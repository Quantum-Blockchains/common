// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.js';

import { stringToU8a } from '@polkadot/util';

import { blake2AsU8a } from '../../blake2/asU8a.js';
import { dilithium2PairFromSeed } from './fromSeed.js';

/**
 * @name dilithium2PairFromString
 * @summary Creates a new public/secret keypair from a string.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { dilithium2PairFromString } from '@polkadot/util-crypto';
 *
 * dilithium2PairFromString('test'); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function dilithium2PairFromString (value: string): Keypair {
  return dilithium2PairFromSeed(
    blake2AsU8a(
      stringToU8a(value)
    )
  );
}