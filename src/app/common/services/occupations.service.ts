import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OccupationsService {

  occupations: string[] = [
    'Frontend Developer', 
    'Backend Developer', 
    'Designer', 
    'Devops Engineer'
  ]
  
}
