import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router, ActivatedRoute } from '@angular/router';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
interface Food {
  value: string;
  viewValue: string;
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  dataToEcrypt:any='hello, world, test, test2, rummy, words'
  encryptedData:string="";
  secretKey:string="mokaa"
  call='loan';
  base64;
  breakpoint;
  processorTo;
  m_amount;
  m_desc;
  button;
  foode="None Selected";
  colspan: number;
  amount;
  heights;
  status="";
  userf="Deposit to FYLIZ INVESTMENT. User masanjax"
  ProcessorShow={'value':''}
  Processor=['Payeer', 'Perfect', 'Bitcoin']
  pageChange="Home";
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 8, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 8, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];;

  constructor(public router:Router, public Arouter:ActivatedRoute) {
    console.log('sha256 :'+ sha256("lewis masatu"));
    this.base64= CryptoJS.enc.Base64.parse("SGVsbG8sIFdvcmxkIQ==");
    this.m_desc = CryptoJS.enc.Base64.stringify(this.base64);
    
    console.log("base64 :"+ this.m_desc)
   }

  ngOnInit() {
    if (this.Arouter.snapshot.queryParamMap.get('s')== 'success'){
  
      this.pageChange ="success"

    }
    else if (this.Arouter.snapshot.queryParamMap.get('s')== 'failed'){
     
      this.pageChange ="failed"

    }
    console.log(this.Arouter.snapshot.queryParamMap.get('id'));
    this.colspan = window.innerWidth;
    console.log('width :'+ this.colspan)
}
  onResize(event) {
    console.log('resizeeed')
    this.colspan = event.target.innerWidth;
    this.heights = event.target.outerHeight;
    console.log('iner width : ' + this.breakpoint)
    console.log('heights : ' + this.heights)
  }


  Investment(){
    this.pageChange ="Investment"

  }

  withdraw(){
    this.pageChange ="withdraw"

  }
  deposit(){
    this.pageChange ="deposit"

  }
  affiliate(){
    this.pageChange ="affiliate"

  }
  agriculturebutton(){
    this.button='agriculture'

  }
  Miningbutton(){
    this.button='mining'
  }
  Realestatebutton(){
    this.button='realestate'
  }

  bitcoin(){
    console.log('imeingia ....')
    this.foode="Bitcoin"
  }
  perfect(){
    console.log('imeingia ....')
    this.foode="Perfect Money"
  }
  payeer(){
  console.log('wozaaaaa')
    this.foode="Payeer"
  }
  submit(){
    console.log('fedd'+ this.foode)
    if(this.foode === 'Perfect Money'){
      // // alert('perfect')
      // localStorage.setItem('perfect', this.foode)
      // localStorage.setItem('amount', this.amount)
      // localStorage.setItem('package', this.button)
      // this.dataToEcrypt=1112883 + ", "+"FYLIZ INVESTMENT" +", "+ localStorage.getItem('perfect') +", "+ localStorage.getItem('amount')+", "+ localStorage.getItem('package')
      // console.log(this.dataToEcrypt)
      // this.encrypt()
      // console.log('Link : ' + 'file:///Users/lewiswanjara/Downloads/PROJECTS/perfect%20money/index.html'+'?'+ this.encryptedData)
      // window.open("file:///Users/lewiswanjara/Downloads/PROJECTS/perfect%20money/index.html"+"?"+"pg="+ this.encryptedData, ',/create-account');
      // // this.router.navigate[('www.google.com')]
      this.processorTo='perfect';
      this.pageChange = 'confirm';

    }else if(this.foode==='Bitcoin'){
      // alert('Bitcoin')
      // localStorage.setItem('bitcoin', this.foode)
      // localStorage.setItem('amount', this.amount)
      // localStorage.setItem('package', this.button)
      this.processorTo='bitcoin';
      this.pageChange = 'confirm';

    }else if(this.foode === 'Payeer')
      {
      //   localStorage.setItem('payeer', this.foode)
      // localStorage.setItem('amount', this.amount)
      // localStorage.setItem('package', this.button)
      // alert(this.button + '/'+ this.amount + '/'+ this.foode)
      this.processorTo='payeer';
      this.pageChange = 'confirm';
      this.m_amount = this.amount;
      console.log('amount  : ' + this.m_amount)

    }
  }

  validate(){
    console.log('amount: '+this.amount)
    if(this.button=='agriculture'){
      console.log('passed agriculture')
      if(this.amount > 10){
        this.status="good"
        console.log('status: '+this.status)

      }else {
        this.status="bad"
        console.log('status: '+this.status)

      }
      

    }else if(this.button=='mining'){
      if(this.amount > 100){
        console.log('passed mining')
        this.status="good"

      }else {
        this.status="bad"

      }

    }else if(this.button == 'realestate'){
      console.log('passed realestate')
      if(this.amount > 200){
        this.status="good"

      }else {
        this.status="bad"

      }


    }else{
      console.log('not passed anything')
    }
  }
  Home(){
    this.pageChange ="Home"

  }
  // Investment(){
  //   this.pageChange ="Investment"

  // }
  // Investment(){
  //   this.pageChange ="Investment"

  // }

  encrypt(){
    
    this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this.dataToEcrypt), this.secretKey).toString()
    console.log('encrypted data: '+ this.encryptedData);
    // console.log('name: '+ obj.name);

  }
  decrypt(){
    let bytes=CryptoJS.AES.decrypt
    (this.encryptedData, this.secretKey);
    var obj =  JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
    console.log('id: '+ obj.id);
    console.log('name: '+ obj.name);

  }

}
