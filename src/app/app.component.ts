import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hcp } from './models/hcp.model'; // Import the interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  // Sample data array
  hcpList: Hcp[] = [
    { name: "John Doe", id: "12345", country: "USA", specialty: "Cardiology", assignedRate: "$200/hr" },
    { name: "Jane Smith", id: "67890", country: "UK", specialty: "Dermatology", assignedRate: "$180/hr" },
    // Add more entries as needed
  ];
}
