import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSimulationComponent } from './ai-simulation.component';

describe('AiSimulationComponent', () => {
  let component: AiSimulationComponent;
  let fixture: ComponentFixture<AiSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSimulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
