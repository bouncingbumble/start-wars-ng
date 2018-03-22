import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateCharacterComponent } from '../create-character/create-character.component';

@NgModule({
   declarations: [
      CreateCharacterComponent
   ],
   imports: [
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
