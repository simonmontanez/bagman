import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LiveReply, LiveRequest, PingRequest, PingResponse} from "../../app/proto/underwood_pb";
import {grpc, BrowserHeaders, Code} from "grpc-web-client";
import {LiveChecker} from "../../app/proto/underwood_pb_service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  host: string = 'http://localhost:8080';
  liveResponse: string;
  pingResponse: string;


  constructor(public navCtrl: NavController) {
    //this.liveTest();
  }

  liveTest() {
    const request = new LiveRequest();

    grpc.invoke(LiveChecker.Live,{
      host: this.host,
      request: request,

      onMessage:(message:LiveReply) => {
        console.log("live check: ", message.toObject());
        this.liveResponse = message.getMessage()
      },

      onEnd:(code:Code, message:string, trailers:BrowserHeaders) => {
        if (code == Code.OK) {
          console.log("all ok");
        } else {
          console.log("hit an error", code, message, trailers);
        }
      }
    })

  }

  ping() {
    const request = new PingRequest();
    request.setMessage("Ping");

    grpc.invoke(LiveChecker.Ping,{
      host: this.host,
      request: request,

      onMessage:(message:PingResponse) => {
        console.log("pingresponse: ", message.toObject());
        this.pingResponse = message.getMessage()
      },

      onEnd:(code:Code, message:string, trailers:BrowserHeaders) => {
        if (code == Code.OK) {
          console.log("all ok");
        } else {
          console.log("hit an error", code, message, trailers);
        }
      }
    })

  }

}
