import {Component} from "@angular/core";
@Component({
    selector : "app-root",
    templateUrl : "./app.component.html",
    styleUrls : ["./app.component.css"]
})

export class AppComponent
{
    title = "app";
    isEnable : boolean;
    names : string[];

    constructor()
    {
        this.isEnable = false;
        this.names = ["Mehdi", "Lenny"];
    }

    toggle()
    {
        this.isEnable = !this.isEnable;
    }
}