import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sign } from './sign';
@Injectable({
  providedIn: 'root',
})
export class SignServiceService {
  url = 'https://localhost:44301/api/UserRegisters';
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<Sign[]> {
    return this.http.get<Sign[]>(this.url);
  }
  getEmployeeById(employeeId: number): Observable<Sign> {
    return this.http.get<Sign>(
      this.url + '/GetEmployeeDetailsById?=' + employeeId
    );
  }
  // Will invoke UserRegistrationsController->PostUserRegistration
  createUser(sign: Sign): Observable<Sign> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Sign>(this.url, sign, httpOptions);
  }
  updateEmployee(sign: Sign): Observable<Sign> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Sign>(
      this.url + '/UpdateEmployeeById?=' + sign.id,
      sign,
      httpOptions
    );
  }
  deleteEmployeeById(employeeid: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.url + '/DeleteEmployeeDetails?id=' + employeeid,
      httpOptions
    );
  }
}
