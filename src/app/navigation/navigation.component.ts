import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  company_name;

  constructor() {
    this.company_name = localStorage.getItem('company_prog')
    // console.log(this.company_name)
   }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      console.log('imepataaaaa: 1')
      element.classList.add('filt');

    } else {
      console.log('imepataaaaa: 2')
      element.classList.remove('filt');
    }
  }

}
