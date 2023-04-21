import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ChildComponentComponent} from './child-component/child-component.component'
import {ChildComponent1Component} from './child-component1/child-component1.component'


@NgModule({
  declarations:[
    ChildComponentComponent,
    ChildComponent1Component
  ],
  import:[
    componentRoutingModule
  ]
})

export class ComponentModule {}
