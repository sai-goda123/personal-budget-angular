import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiUrl = 'http://localhost:3000/budget';
  private budgetData: any[] =[];
  constructor(private http: HttpClient) { }

  getBudgetData(): Observable<any> {
    return this.http.get('http://localhost:3000/budget');
  }

  setBudgetData(data: any[]): void {
    this.budgetData = data;
  }

  getStoredBudgetData(): any[] {
    return this.budgetData;
  }

  isBudgetDataEmpty(): boolean {
    return this.budgetData.length === 0;
  }

  getBudget(): Observable<any> {
    return this.http.get('http://localhost:3000/budget');
  }
}
