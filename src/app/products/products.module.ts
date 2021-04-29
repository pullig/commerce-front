import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductsRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddComponent
    ]
})
export class ProductsModule { }