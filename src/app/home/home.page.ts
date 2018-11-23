import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  capCall(){

    var customPluginAlert = window[customPluginAlert];

    var input = document.getElementById("echo").nodeValue;
    success = function(v) { alert(v); },
    error = function(v) { alert(v); };

    customPluginAlert.echo(input, success, error);
  }
}
