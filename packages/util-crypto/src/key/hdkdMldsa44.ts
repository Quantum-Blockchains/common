// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { mldsa44DeriveHard, mldsa44PairFromSeed } from '../mldsa44/index.js';
import { createSeedDeriveFn } from './hdkdDerive.js';

export const keyHdkdMldsa44 = createSeedDeriveFn(mldsa44PairFromSeed, mldsa44DeriveHard);