// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { hasBigInt, u8aToHex, u8aToU8a } from '@polkadot/util';
import { isReady } from '@polkadot/wasm-crypto';

// re-export so TS *.d.ts generation is correct
export type { HexString } from '@polkadot/util/types';

interface DualHash {
  256: (u8a: Uint8Array) => Uint8Array;
  512: (u8a: Uint8Array) => Uint8Array;
}

export function createAsHex <T extends (...args: never[]) => Uint8Array> (fn: T): (...args: Parameters<T>) => HexString {
  return (...args: Parameters<T>): HexString =>
    u8aToHex(fn(...args));
}

export function createBitHasher (bitLength: 256 | 512, fn: (data: HexString | Buffer | Uint8Array | string, bitLength: 256 | 512, onlyJs?: boolean) => Uint8Array): (data: HexString | Buffer | Uint8Array | string, onlyJs?: boolean) => Uint8Array {
  return (data: HexString | Buffer | Uint8Array | string, onlyJs?: boolean): Uint8Array =>
    fn(data, bitLength, onlyJs);
}

export function createDualHasher (wa: DualHash, js: DualHash): (value: HexString | Buffer | Uint8Array | string, bitLength?: 256 | 512, onlyJs?: boolean) => Uint8Array {
  return (value: HexString | Buffer | Uint8Array | string, bitLength: 256 | 512 = 256, onlyJs?: boolean): Uint8Array => {
    const u8a = u8aToU8a(value);

    return !hasBigInt || (!onlyJs && isReady())
      ? wa[bitLength](u8a)
      : js[bitLength](u8a);
  };
}
