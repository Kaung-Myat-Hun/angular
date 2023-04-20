import { Component,Input } from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-test-component-angular',
  templateUrl: './test-component-angular.component.html',
  styleUrls: ['./test-component-angular.component.scss']
})
export class TestComponentAngularComponent {
  @Input() hero?: Hero;
}
