import { Component } from '@angular/core';
import { Pilkarz } from '../interface';

@Component({
  selector: 'app-root',
  templateUrl: './stornaessa.html',
  styleUrls: ['./style.css']
})
export class AppComponent {
  title ="tesla"
  imageTab:string[]= [
    "./assets/images/small/1.jpg",
    "./assets/images/small/2.jpg",
    "./assets/images/small/3.jpg",
    "./assets/images/small/4.jpg",
    "./assets/images/small/5.jpg",
    "./assets/images/small/6.jpg",
    "./assets/images/small/7.jpg",
    "./assets/images/small/8.jpg",
    "./assets/images/small/9.jpg",
    "./assets/images/small/10.jpg",
  ];
  city:Array<Pilkarz>=[
   {nazwisko:'Sergio',imie:'Agüero'},
   {nazwisko:'João',imie:'Cancelo'},
   {nazwisko:'Fernando',imie:'Rosa'},
   {nazwisko:'Phil',imie:'Foden'},
   {nazwisko:'Erling',imie:'Haaland'},
   {nazwisko:'Joe',imie:'Hart'},
   {nazwisko:'Kevin',imie:'De Bruyne'},
   {nazwisko:'Riyad',imie:'Mahrez'},
   {nazwisko:'Bernardo',imie:'Silva'},
   {nazwisko:'Kyle',imie:'Walker'},
  ]
 }
 
