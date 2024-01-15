// Code generated by schema tool; DO NOT EDIT.

// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import * as wasmtypes from '../wasmtypes';
import * as sc from './index';

export class ArrayOfImmutableAddress extends wasmtypes.ScProxy {

    length(): u32 {
        return this.proxy.length();
    }

    getAddress(index: u32): wasmtypes.ScImmutableAddress {
        return new wasmtypes.ScImmutableAddress(this.proxy.index(index));
    }
}

export class ImmutableGetAllowedStateControllerAddressesResults extends wasmtypes.ScProxy {
    // Array of state controller addresses
    controllers(): sc.ArrayOfImmutableAddress {
        return new sc.ArrayOfImmutableAddress(this.proxy.root(sc.ResultControllers));
    }
}

export class ArrayOfMutableAddress extends wasmtypes.ScProxy {

    appendAddress(): wasmtypes.ScMutableAddress {
        return new wasmtypes.ScMutableAddress(this.proxy.append());
    }

    clear(): void {
        this.proxy.clearArray();
    }

    length(): u32 {
        return this.proxy.length();
    }

    getAddress(index: u32): wasmtypes.ScMutableAddress {
        return new wasmtypes.ScMutableAddress(this.proxy.index(index));
    }
}

export class MutableGetAllowedStateControllerAddressesResults extends wasmtypes.ScProxy {
    // Array of state controller addresses
    controllers(): sc.ArrayOfMutableAddress {
        return new sc.ArrayOfMutableAddress(this.proxy.root(sc.ResultControllers));
    }
}

export class ImmutableGetChainInfoResults extends wasmtypes.ScProxy {
    // chain ID
    chainID(): wasmtypes.ScImmutableChainID {
        return new wasmtypes.ScImmutableChainID(this.proxy.root(sc.ResultChainID));
    }

    // chain owner agent ID
    chainOwnerID(): wasmtypes.ScImmutableAgentID {
        return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.ResultChainOwnerID));
    }

    // serialized fee policy
    feePolicy(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultFeePolicy));
    }

    // serialized gas limits
    gasLimits(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultGasLimits));
    }

    // chain metadata
    metadata(): sc.ImmutablePublicChainMetadata {
        return new sc.ImmutablePublicChainMetadata(this.proxy.root(sc.ResultMetadata));
    }

    publicURL(): wasmtypes.ScImmutableString {
        return new wasmtypes.ScImmutableString(this.proxy.root(sc.ResultPublicURL));
    }
}

export class MutableGetChainInfoResults extends wasmtypes.ScProxy {
    // chain ID
    chainID(): wasmtypes.ScMutableChainID {
        return new wasmtypes.ScMutableChainID(this.proxy.root(sc.ResultChainID));
    }

    // chain owner agent ID
    chainOwnerID(): wasmtypes.ScMutableAgentID {
        return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.ResultChainOwnerID));
    }

    // serialized fee policy
    feePolicy(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultFeePolicy));
    }

    // serialized gas limits
    gasLimits(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultGasLimits));
    }

    // chain metadata
    metadata(): sc.MutablePublicChainMetadata {
        return new sc.MutablePublicChainMetadata(this.proxy.root(sc.ResultMetadata));
    }

    publicURL(): wasmtypes.ScMutableString {
        return new wasmtypes.ScMutableString(this.proxy.root(sc.ResultPublicURL));
    }
}

export class MapBytesToImmutableBytes extends wasmtypes.ScProxy {

    getBytes(key: Uint8Array): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.key(wasmtypes.bytesToBytes(key)));
    }
}

export class MapBytesToImmutableBool extends wasmtypes.ScProxy {

    getBool(key: Uint8Array): wasmtypes.ScImmutableBool {
        return new wasmtypes.ScImmutableBool(this.proxy.key(wasmtypes.bytesToBytes(key)));
    }
}

export class ImmutableGetChainNodesResults extends wasmtypes.ScProxy {
    // serialized access node info per pubKey
    accessNodeCandidates(): sc.MapBytesToImmutableBytes {
        return new sc.MapBytesToImmutableBytes(this.proxy.root(sc.ResultAccessNodeCandidates));
    }

    // pubKey set
    accessNodes(): sc.MapBytesToImmutableBool {
        return new sc.MapBytesToImmutableBool(this.proxy.root(sc.ResultAccessNodes));
    }
}

export class MapBytesToMutableBytes extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getBytes(key: Uint8Array): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.key(wasmtypes.bytesToBytes(key)));
    }
}

export class MapBytesToMutableBool extends wasmtypes.ScProxy {

    clear(): void {
        this.proxy.clearMap();
    }

    getBool(key: Uint8Array): wasmtypes.ScMutableBool {
        return new wasmtypes.ScMutableBool(this.proxy.key(wasmtypes.bytesToBytes(key)));
    }
}

export class MutableGetChainNodesResults extends wasmtypes.ScProxy {
    // serialized access node info per pubKey
    accessNodeCandidates(): sc.MapBytesToMutableBytes {
        return new sc.MapBytesToMutableBytes(this.proxy.root(sc.ResultAccessNodeCandidates));
    }

    // pubKey set
    accessNodes(): sc.MapBytesToMutableBool {
        return new sc.MapBytesToMutableBool(this.proxy.root(sc.ResultAccessNodes));
    }
}

export class ImmutableGetChainOwnerResults extends wasmtypes.ScProxy {
    // chain owner
    chainOwnerID(): wasmtypes.ScImmutableAgentID {
        return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.ResultChainOwnerID));
    }
}

export class MutableGetChainOwnerResults extends wasmtypes.ScProxy {
    // chain owner
    chainOwnerID(): wasmtypes.ScMutableAgentID {
        return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.ResultChainOwnerID));
    }
}

export class ImmutableGetEVMGasRatioResults extends wasmtypes.ScProxy {
    // serialized gas ratio
    gasRatio(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultGasRatio));
    }
}

export class MutableGetEVMGasRatioResults extends wasmtypes.ScProxy {
    // serialized gas ratio
    gasRatio(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultGasRatio));
    }
}

export class ImmutableGetFeePolicyResults extends wasmtypes.ScProxy {
    // serialized fee policy
    feePolicy(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultFeePolicy));
    }
}

export class MutableGetFeePolicyResults extends wasmtypes.ScProxy {
    // serialized fee policy
    feePolicy(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultFeePolicy));
    }
}

export class ImmutableGetGasLimitsResults extends wasmtypes.ScProxy {
    // serialized gas limits
    gasLimits(): wasmtypes.ScImmutableBytes {
        return new wasmtypes.ScImmutableBytes(this.proxy.root(sc.ResultGasLimits));
    }
}

export class MutableGetGasLimitsResults extends wasmtypes.ScProxy {
    // serialized gas limits
    gasLimits(): wasmtypes.ScMutableBytes {
        return new wasmtypes.ScMutableBytes(this.proxy.root(sc.ResultGasLimits));
    }
}

export class ImmutableGetMaintenanceStatusResults extends wasmtypes.ScProxy {
    // whether maintenance mode is on
    status(): wasmtypes.ScImmutableBool {
        return new wasmtypes.ScImmutableBool(this.proxy.root(sc.ResultStatus));
    }
}

export class MutableGetMaintenanceStatusResults extends wasmtypes.ScProxy {
    // whether maintenance mode is on
    status(): wasmtypes.ScMutableBool {
        return new wasmtypes.ScMutableBool(this.proxy.root(sc.ResultStatus));
    }
}

export class ImmutableGetMetadataResults extends wasmtypes.ScProxy {
    // the L2 metadata
    metadata(): sc.ImmutablePublicChainMetadata {
        return new sc.ImmutablePublicChainMetadata(this.proxy.root(sc.ResultMetadata));
    }

    // the public url leading to the chain info, stored on the tangle (l1)
    publicURL(): wasmtypes.ScImmutableString {
        return new wasmtypes.ScImmutableString(this.proxy.root(sc.ResultPublicURL));
    }
}

export class MutableGetMetadataResults extends wasmtypes.ScProxy {
    // the L2 metadata
    metadata(): sc.MutablePublicChainMetadata {
        return new sc.MutablePublicChainMetadata(this.proxy.root(sc.ResultMetadata));
    }

    // the public url leading to the chain info, stored on the tangle (l1)
    publicURL(): wasmtypes.ScMutableString {
        return new wasmtypes.ScMutableString(this.proxy.root(sc.ResultPublicURL));
    }
}

export class ImmutableGetMinSDResults extends wasmtypes.ScProxy {
    getMinSD(): wasmtypes.ScImmutableUint64 {
        return new wasmtypes.ScImmutableUint64(this.proxy.root(sc.ResultGetMinSD));
    }
}

export class MutableGetMinSDResults extends wasmtypes.ScProxy {
    getMinSD(): wasmtypes.ScMutableUint64 {
        return new wasmtypes.ScMutableUint64(this.proxy.root(sc.ResultGetMinSD));
    }
}

export class ImmutableGetPayoutAgentIDResults extends wasmtypes.ScProxy {
    // get payout AgentID
    payoutAgentID(): wasmtypes.ScImmutableAgentID {
        return new wasmtypes.ScImmutableAgentID(this.proxy.root(sc.ResultPayoutAgentID));
    }
}

export class MutableGetPayoutAgentIDResults extends wasmtypes.ScProxy {
    // get payout AgentID
    payoutAgentID(): wasmtypes.ScMutableAgentID {
        return new wasmtypes.ScMutableAgentID(this.proxy.root(sc.ResultPayoutAgentID));
    }
}