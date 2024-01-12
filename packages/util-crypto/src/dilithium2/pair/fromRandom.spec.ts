// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types';

import { dilithium2PairFromRandom } from '..';

describe('dilithium2PairFromRandom', (): void => {
  let keypair: Keypair;

  beforeEach((): void => {
    keypair = dilithium2PairFromRandom();
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
