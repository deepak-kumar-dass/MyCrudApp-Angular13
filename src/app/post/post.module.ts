import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
     IndexComponent,
     ViewComponent,
     CreateComponent,
     HeaderComponent,
     FooterComponent,
     EditComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule
  ]
})
export class PostModule { }
