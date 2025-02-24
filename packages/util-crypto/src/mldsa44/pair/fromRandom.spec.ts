// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types.js';

import { mldsa44PairFromRandom } from '../index.js';

describe('mldsa44PairFromRandom', (): void => {
  let keypair: Keypair;

  beforeEach((): void => {
    keypair = mldsa44PairFromRandom();
  });

  it('generates a valid publicKey', (): void => {
    expect(
      keypair.publicKey
    ).toHaveLength(1312);
  });

  it('generates a valid secretKey', (): void => {
    expect(
      keypair.secretKey
    ).toHaveLength(32);
  });
});