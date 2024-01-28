import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmVisualizationComponent } from './algorithm-visualization.component';

describe('AlgorithmVisualizationComponent', () => {
  let component: AlgorithmVisualizationComponent;
  let fixture: ComponentFixture<AlgorithmVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgorithmVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
