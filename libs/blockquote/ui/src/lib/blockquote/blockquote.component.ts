import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-blockquote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss'],
})
export class BlockquoteComponent {}
