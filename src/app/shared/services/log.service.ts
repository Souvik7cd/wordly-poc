import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  log(msg: any) {
    const date = new Date();
    const dateStr = date.toUTCString();
    console.log(dateStr + ": " + JSON.stringify(msg));
  }
}
