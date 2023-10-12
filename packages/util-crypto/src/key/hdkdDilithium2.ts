// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { dilithium2DeriveHard, dilithium2PairFromSeed } from '../dilithium2/index.js';
import { createSeedDeriveFn } from './hdkdDerive.js';

export const keyHdkdDilithium2 = createSeedDeriveFn(dilithium2PairFromSeed, dilithium2DeriveHard);