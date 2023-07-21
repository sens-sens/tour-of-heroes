import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService : fetched heroes')
    return of(HEROES);
  }
  getHero(id:Number):Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
