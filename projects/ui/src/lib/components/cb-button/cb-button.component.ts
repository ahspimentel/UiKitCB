import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cbButton',
  templateUrl: './cb-button.component.html',
  styleUrls: ['./cb-button.component.scss'],
  standalone: true,
  imports: [
    NgClass,
  ],
})
export class ButtonComponent {
    
  @Input()
  public variant!: 'primary' | 'secondary' | 'tertiary';

  @Input()
  public size: 'sm' | 'rg'| 'lg' = 'rg';

  @Input()
  public fullwidth: boolean=false;

}
