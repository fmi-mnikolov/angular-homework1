import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl: string = 'http://localhost:3000/users';

  constructor(private client: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.client.get<User[]>(this.apiUrl);
  }

  public createUser(user: User): Observable<User> {
    return this.client.post<User>(this.apiUrl, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.client.put<User>(`${this.apiUrl}${user.id}`, user);
  }

  public deleteUser(user: User): Observable<User> {
    return this.client.delete<User>(`${this.apiUrl}${user.id}`);
  }

  public getUser(id: number): Observable<User> {
    return this.client.get<User>(`${this.apiUrl}/${id}`);
  }
}
