import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListTableComponent } from './order-list-table.component';

describe('OrderListTableComponent', () => {
  let component: OrderListTableComponent;
  let fixture: ComponentFixture<OrderListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
