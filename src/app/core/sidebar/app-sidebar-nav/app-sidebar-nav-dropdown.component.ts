import {Component, Input} from '@angular/core';

import {SidebarNavHelper} from '../app-sidebar-nav.service';

@Component({
  selector: 'ast-sidebar-nav-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle"
       appNavDropdownToggle
       [appHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="helper.getIconClass(item)"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="helper.getBadgeClass(item)">{{ item.badge.text }}</span>
    </a>
    <ast-sidebar-nav-items
      class="nav-dropdown-items"  style="padding-left: 10px"
      [items]="item.children">
    </ast-sidebar-nav-items>
  `,
  styles: [
    '.nav-dropdown-toggle { cursor: pointer; }',
    '.nav-dropdown-items { display: block; }'
  ],
  providers: [ SidebarNavHelper ]
})
export class AppSidebarNavDropdownComponent {
  @Input() item: any;

  constructor(
    public helper: SidebarNavHelper
  ) { }
}
