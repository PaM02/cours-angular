import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    // interval(1000).pipe(tap(console.log)).subscribe();
    this.destroy$ = new Subject<boolean>();
    // interval(1000).pipe(
    //   take(3),
    //   tap(console.log),
    // ).subscribe();
    // interval(1000).pipe(
    //   tap(console.log),
    //   takeUntil(this.destroy$)
    // ).subscribe();
    // interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));
    // interval(1000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));
    // interval(500).pipe(
    //   map(value => console.log(2 * (value + 1)))
    // ).subscribe();


  }

  ngOnDestroy(): void {
    this.destroy$.next(true);

  }

}
