import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateCharacterComponent } from '../create-character/create-character.component';

@NgModule({
   declarations: [
      CreateCharacterComponent
   ],
   imports: [
      FormsModule,
      CommonModule,
      RouterModule.forChild([
         {
            path: '', component: CreateCharacterComponent
         }
      ])
   ]
})
export class CreateCharacterModule{

}
