import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-simulation',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './ai-simulation.component.html',
  styleUrls: ['./ai-simulation.component.scss']
})
export class AiSimulationComponent {
  model!: tf.LayersModel;
  userInput: string = '';
  prediction: any;


  ngOnInit() {
    this.loadModel();
  }

  async loadModel() {
    // ... existing model loading code
  }

  async predict() {
    if (this.model && this.userInput) {
      const inputTensor = tf.tensor1d([this.userInput]); // Adjust based on your model's expected input
      const prediction = this.model.predict(inputTensor);
      
      // Process the prediction result as needed
      this.prediction = prediction.toString(); // Update this line based on how you want to display the prediction
    }
  }
}
