import { Injectable } from '@angular/core';
import { Carousel } from '../shared/models/Carousel';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {

  carousel: Carousel[] = [
    {header:"iPhone 6 Plus",
    paragraph: "Dual SIM",
  imageUrl:"assets/h4-slide.png",
  imageName:"IPhone"
},
    {header:"by one, get one 50% off",
    paragraph: "school supplies & backpacks.*",
  imageUrl:"assets/h4-slide2.png",
  imageName:"school supplies"

},
    {header:"Apple Store Ipod",
    paragraph: "Select Item",
  imageUrl:"assets/h4-slide3.png",
  imageName:"Apple Ipod"

}
,
    {header:"Apple Store Ipod",
    paragraph: "& Phone",
  imageUrl:"assets/h4-slide4.png",
  imageName:"Apple Ipod"

}
  ];

  constructor(){}

  GetCarousel(){
    return this.carousel
  }
}
