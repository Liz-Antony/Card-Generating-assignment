import { Component } from '@angular/core';
import { Personal,Sentiment,Border,BorderEdge }  from './interfaceCard';
import cardOptions from '../assets/data/cardJSON.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personalSelect:Personal=cardOptions.personal;
  sentimentSelect:Sentiment[]=cardOptions.sentiment;
  borderSelect:Border[]=cardOptions.borderColour;
  borderEdge:BorderEdge[]=cardOptions.borderEdge;

  selectionSentiment="Keep Laughing!";
  selectionBorder="skyblue";
  selectionEdge="square";
  outCard:string="";
  createCard(){let imgPic!: string;
    // first get correct image
    for (let x of this.sentimentSelect) {
    if (this.selectionSentiment === x.txt) { imgPic = x.pic; }
    }
    this.outCard =
    `
    <img src='assets/images/${imgPic}' width='50'> ${this.selectionSentiment}
    <img src='assets/images/${imgPic}' width='50'>
    <br> <br> ${this.personalSelect.signature} <br><br>
    Let me know how you are doing...<br><br>
    ${this.personalSelect.myemail} <br><br>
    <img src='assets/images/${imgPic}' width='50'>
    <img src='assets/images/${imgPic}' width='50'>
    <img src='assets/images/${imgPic}' width='50'>
    `;
    document.getElementById("outid")!.style.borderColor = this.selectionBorder;
    document.getElementById("outid")!.style.color = this.selectionBorder;
    if (this.selectionEdge === "round") {
    document.getElementById("outid")!.style.borderRadius = '50px';}
    else {
    document.getElementById("outid")!.style.borderRadius = '0px';}}

  title = 'json2App';
}

