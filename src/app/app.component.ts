import { Component } from '@angular/core';
import { filter, interval, Observable, tap } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // mySnap!: FaceSnap;
  // myOtherSnap!: FaceSnap;
  // myLastSnap!: FaceSnap;
  // faceSnaps!: FaceSnap[];

  interval$!: Observable<String>;


  ngOnInit() {

    // this.interval$ = interval(1000).pipe(
    //   filter(value => value % 3 === 0),
    //   map(value => value % 2 === 0 ?
    //     `Je suis ${value} et je suis pair` :
    //     `Je suis ${value} et je suis impair`
    //   ),
    //   tap(text => this.logger(text))
    // );


    // this.interval$ = interval(1000).pipe(
    //   map(value => value % 2 === 0 ?
    //     `Je suis ${value} et je suis pair` :
    //     `Je suis ${value} et je suis impair`
    //   )
    // );

    // this.interval$ = interval(1000).pipe(
    //   map(value => value * 10)
    // );

    // this.interval$ = interval(1000);
    /* const interval$ = interval(5000);

    interval$.subscribe(value => console.log(value));

    setTimeout(() => {
      interval$.subscribe(value => console.log(value));
    }, 3000); */



    // this.faceSnaps = [
    //   {
    //     title: 'Archibald',
    //     description: 'Mon meilleur ami depuis tout petit !',
    //     imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //     createdDate: new Date(),
    //     snaps: 0,
    //     location: 'Paris'
    //   },
    //   {
    //     title: 'Three Rock Mountain',
    //     description: 'Un endroit magnifique pour les randonnées.',
    //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    //     createdDate: new Date(),
    //     snaps: 6,
    //     location: 'la montagne'
    //   },
    //   {
    //     title: 'Un bon repas',
    //     description: 'Mmmh que c\'est bon !',
    //     imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    //     createdDate: new Date(),
    //     snaps: 0
    //   }
    // ];
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  // this.mySnap = {
  //   title: 'Archibald',
  //   description: 'Mon meilleur ami depuis tout petit !',
  //   imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //   createdDate: new Date(),
  //   snaps: 0,
  //   location: "paris"
  // };
  // this.myOtherSnap = {
  //   title: 'Three Rock Mountain',
  //   description: 'Un endroit magnifique pour les randonnées.',
  //   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
  //   createdDate: new Date(),
  //   snaps: 0,
  //   location: "la montagne"
  // };
  // this.myLastSnap = {
  //   title: 'Un bon repas',
  //   description: 'Mmmh que c\'est bon !',
  //   imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
  //   createdDate: new Date(),
  //   snaps: 0
  // };
  // this.mySnap = new FaceSnap(
  //   'Archibald',
  //   'Mon meilleur ami depuis tout petit !',
  //   'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  //   new Date(),
  //   0
  // );
}

