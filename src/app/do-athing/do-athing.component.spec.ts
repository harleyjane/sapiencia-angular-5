import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DoAthingComponent } from './do-athing.component';

describe('DoAthingComponent', () => {
  let component: DoAthingComponent;
  let fixture: ComponentFixture<DoAthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoAthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoAthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
