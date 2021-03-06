import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav-title.component';

describe('AppSidebarNavTitleComponent', () => {
  let component: AppSidebarNavTitleComponent;
  let fixture: ComponentFixture<AppSidebarNavTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNavTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
