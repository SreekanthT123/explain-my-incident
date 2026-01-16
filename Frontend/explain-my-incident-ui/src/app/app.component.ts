import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncidentInputComponent } from './components/incident-input/incident-input.component';
import { IncidentOutputComponent } from './components/incident-output/incident-output.component';
import { ExplainIncidentService } from './services/explain-incident.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncidentInputComponent, IncidentOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'explain-my-incident-ui';
  loading: boolean = false;
  error: string = '';
  result: any = null;
  constructor(private explainIncidentService: ExplainIncidentService) {}
  onSubmit(data: any) {
    this.loading = true;
    this.result = null;
    this.error = '';

    this.explainIncidentService.explainIncident(data).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to analyze the incident right now. Please try again.';
        this.loading = false;
      },
    });
  }
}
