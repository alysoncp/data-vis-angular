import { Injectable, OnDestroy } from '@angular/core';
import * as Types from './sources';
import { BehaviorSubject, Subscription, Observable, Subject } from 'rxjs';
import {Apollo, gql} from 'apollo-angular';


@Injectable({
  providedIn: 'root',
})

export class DataService implements OnDestroy {

  data$: Observable<any>;
  private dataSource: Subject<any> = new Subject();

  public dataSubscription: Subscription;
  data: any[] = [];
  loading = true;
  error: any;

  private DATA_QUERY = gql`
     {
        medals {
          Event
          Sport
          Gender
          Colour
          Day
        }
      }
    `;

  constructor(private apollo: Apollo) {
    this.data$ = this.dataSource.asObservable();
  }

  public updateData(): void {
    this.dataSubscription = this.apollo
      .watchQuery({
        query: this.DATA_QUERY
      })
      .valueChanges.subscribe((result: any) => {
        this.dataSource.next(result.data.medals);
      });
  }

  public ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
