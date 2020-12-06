import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr'; //toaster 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = 'tic-tac-toe';
  messWinner: string = '';
  itemArray: string[] = new Array(9).fill('empty');
  isCross = false ;
  allOnempty = false;

  constructor(private toastr: ToastrService) {}

  HandelClick(itemNumber: number){
    if(this.messWinner){
      return this.toastr.error(this.messWinner);
    }
    if(this.itemArray[itemNumber] === 'empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross':'circle';
      this.isCross = !this.isCross;
    }else{
      return this.toastr.info('Already clicked');

    }
    this.CheckIsWinner();
  }


  ReSet(){
    this.messWinner = '';
    this.itemArray = new Array(9).fill('empty');
    this.isCross = false ;
    this.allOnempty = false;
  }

  CheckIsWinner()
  {
    if( this.itemArray[0] === this.itemArray[1] &&
        this.itemArray[0] === this.itemArray[2] &&
        this.itemArray[0] != 'empty'){
        this.messWinner = `${this.itemArray[0]} won`;

        } else if(this.itemArray[3] === this.itemArray[4] &&
                  this.itemArray[3] === this.itemArray[5] &&
                  this.itemArray[3] != 'empty'){
                  this.messWinner = `${this.itemArray[3]} won`;

        }else if (this.itemArray[6] === this.itemArray[7] &&
                  this.itemArray[6] === this.itemArray[8] &&
                  this.itemArray[6] != 'empty'){
                  this.messWinner = `${this.itemArray[6]} won`;

        }else if( this.itemArray[0] === this.itemArray[3] &&
                  this.itemArray[0] === this.itemArray[6] &&
                  this.itemArray[0] != 'empty'){
                  this.messWinner = `${this.itemArray[0]} won`;

        }else if (this.itemArray[1] === this.itemArray[4] &&
                  this.itemArray[1] === this.itemArray[7] &&
                  this.itemArray[1] != 'empty'){
                  this.messWinner = `${this.itemArray[1]} won`;

        }else if (this.itemArray[2] === this.itemArray[5] &&
                  this.itemArray[2] === this.itemArray[8] &&
                  this.itemArray[2] != 'empty'){
                  this.messWinner = `${this.itemArray[2]} won`;

        }else if (this.itemArray[0] === this.itemArray[1] &&
                  this.itemArray[0] === this.itemArray[2] &&
                  this.itemArray[0] != 'empty'){
                  this.messWinner = `${this.itemArray[0]} won`;

        }else if (this.itemArray[3] === this.itemArray[4] &&
                  this.itemArray[3] === this.itemArray[5] &&
                  this.itemArray[3] != 'empty'){
                  this.messWinner = `${this.itemArray[3]} won`;

        }else if (this.itemArray[6] === this.itemArray[7] &&
                  this.itemArray[6] === this.itemArray[8] &&
                  this.itemArray[6] != 'empty'){
                  this.messWinner = `${this.itemArray[6]} won`;

        }else if (this.itemArray[0] === this.itemArray[4] &&
                  this.itemArray[0] === this.itemArray[8] &&
                  this.itemArray[0] != 'empty'){
                  this.messWinner = `${this.itemArray[0]} won`;

        }else if (this.itemArray[2] === this.itemArray[4] &&
                  this.itemArray[2] === this.itemArray[6] &&
                  this.itemArray[2] != 'empty'){
                  this.messWinner = `${this.itemArray[2]} won`;
        }
        
          
        }
        
      }
      



