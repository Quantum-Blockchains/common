// Copyright 2017-2022 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EncryptedJsonEncoding } from '@polkadot/util-crypto/types';
import type { PairInfo } from './types';

import { u8aEq } from '@polkadot/util';
import { jsonDecryptData } from '@polkadot/util-crypto';

import { PKCS8_DIVIDER, PKCS8_HEADER, PUB_LENGTH, SEC_LENGTH, SEED_LENGTH } from './defaults';

const SEED_OFFSET = PKCS8_HEADER.length;

type DecodeResult = PairInfo & {
  secretKey: Uint8Array;
};

export function decodePair (passphrase?: string, encrypted?: Uint8Array | null, _encType?: EncryptedJsonEncoding | EncryptedJsonEncoding[]): DecodeResult {
  const encType = Array.isArray(_encType) || _encType === undefined
    ? _encType
    : [_encType];
  const decrypted = jsonDecryptData(encrypted, passphrase, encType);
  const header = decrypted.subarray(0, PKCS8_HEADER.length);

  console.log("1");

  if (!u8aEq(header, PKCS8_HEADER)) {
    throw new Error('Invalid Pkcs8 header found in body');
  }

  console.log("2");

  let secretKey = decrypted.subarray(SEED_OFFSET, SEED_OFFSET + SEC_LENGTH);
  let divOffset = SEED_OFFSET + SEC_LENGTH;
  let divider = decrypted.subarray(divOffset, divOffset + PKCS8_DIVIDER.length);

  console.log("3");

  // old-style, we have the seed here
  if (!u8aEq(divider, PKCS8_DIVIDER)) {
    divOffset = SEED_OFFSET + SEED_LENGTH;
    secretKey = decrypted.subarray(SEED_OFFSET, divOffset);
    divider = decrypted.subarray(divOffset, divOffset + PKCS8_DIVIDER.length);

    if (!u8aEq(divider, PKCS8_DIVIDER)) {
      throw new Error('Invalid Pkcs8 divider found in body');
    }
  }

  console.log("4");

  const pubOffset = divOffset + PKCS8_DIVIDER.length;
  const publicKey = decrypted.subarray(pubOffset, pubOffset + PUB_LENGTH);

    console.log("5");

console.log(`Public length = ${publicKey.length}`)
console.log(`Secret length = ${secretKey.length}`)

  return {
    publicKey,
    secretKey
  };
}
