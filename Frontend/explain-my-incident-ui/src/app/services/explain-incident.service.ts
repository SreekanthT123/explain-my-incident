import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExplainIncidentService {
  private api_url = 'http://localhost:3000/api/explain-incident';

  constructor(private http: HttpClient) {}

  explainIncident(payload: {
    incident_description: string;
    logs?: string;
    errors?: string;
    changes?: string;
    context?: string;
  }) {
    return this.http.post<any>(this.api_url, payload);
  }
}
