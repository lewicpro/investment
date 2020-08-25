import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  call='loan';
  breakpoint;
  colspan: number;
  heights;
  userdata;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 8, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 8, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public router:Router, public restapi:RestApiService ) {
    
   }

  onResize(event) {
    console.log('resizeeed')
    this.colspan = event.target.innerWidth;
    this.heights = event.target.outerHeight;
    console.log('iner width : ' + this.breakpoint)
    console.log('heights : ' + this.heights)
  }

  ngOnInit() {
    this.colspan = window.innerWidth;
    console.log('width :'+ this.colspan)
}

postdata(){
  this.restapi.postData(this.userdata, 'musoha/').then(data=>{
    this
  })

}

  Agriculture(){

    // this.state='loan'
    localStorage.setItem('moporojoa', 'mananiga')
    this.router.navigate(['invest'])
  }
  Realestate(){
    // this.state='realestate'
    localStorage.setItem('moporojoa', 'masdembemnis')
    this.router.navigate(['invest'])


  }

  Mining(){
    // this.state='realestate'
    localStorage.setItem('moporojoa', 'mombzsed')
    this.router.navigate(['invest'])


  }

  shop(){
    this.call='shop'

  }
  transaction(){
    this.call='transaction'

  }
  distribution(){
    this.call='distribution'

  }

  

}
