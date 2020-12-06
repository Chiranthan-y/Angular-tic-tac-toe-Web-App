import { Component, OnInit, Input } from '@angular/core';
//icons
import {faTimes,faPen} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() IconName: string;//decorator for interaction
  
  constructor() { }
  //icon names
  faTimes = faTimes;
  faPen = faPen;
  faCircle = faCircle;
  

  ngOnInit(): void {
  }

}
