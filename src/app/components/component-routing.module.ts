import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {ChildComponentComponent} from './child-component/child-component.component'

const routes : ROUTES = [
  {path:'', component: ChildComponentComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  export: [RouterModule]
})

export class ComponentRoutingModule {}
