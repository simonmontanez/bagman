// package: co.bagman.protos
// file: proto/underwood.proto

import * as proto_underwood_pb from "../proto/underwood_pb";
export class LiveChecker {
  static serviceName = "co.bagman.protos.LiveChecker";
}
export namespace LiveChecker {
  export class Live {
    static readonly methodName = "Live";
    static readonly service = LiveChecker;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_underwood_pb.LiveRequest;
    static readonly responseType = proto_underwood_pb.LiveReply;
  }
  export class Ping {
    static readonly methodName = "Ping";
    static readonly service = LiveChecker;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = proto_underwood_pb.PingRequest;
    static readonly responseType = proto_underwood_pb.PingResponse;
  }
}
