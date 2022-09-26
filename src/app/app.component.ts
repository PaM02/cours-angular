import { Component } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // mySnap!: FaceSnap;
  // myOtherSnap!: FaceSnap;
  // myLastSnap!: FaceSnap;
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 6,
        location: 'la montagne'
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ];
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

