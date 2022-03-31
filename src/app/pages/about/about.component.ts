import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutPicture = {
    name: "About Picture",
    image: "../assets/back.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
