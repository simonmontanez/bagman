// package: co.bagman.protos
// file: proto/underwood.proto

import * as jspb from "google-protobuf";

export class LiveRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LiveRequest): LiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveRequest;
  static deserializeBinaryFromReader(message: LiveRequest, reader: jspb.BinaryReader): LiveRequest;
}

export namespace LiveRequest {
  export type AsObject = {
  }
}

export class LiveReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveReply.AsObject;
  static toObject(includeInstance: boolean, msg: LiveReply): LiveReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveReply;
  static deserializeBinaryFromReader(message: LiveReply, reader: jspb.BinaryReader): LiveReply;
}

export namespace LiveReply {
  export type AsObject = {
    message: string,
  }
}

