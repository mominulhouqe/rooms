import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{


  // Sample card data
  cards = [
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      icon: 'fas fa-video-camera',
      icon2: 'fas fa-video-camera',
      count: 350,
      buttonIcon1: 'fas fa-play',
      buttonText1: 'Play',
      buttonIcon2: 'fas fa-pause',
      buttonText2: 'Pause'
    },
    // Add more card data here for a total of 6 cards
  ];

  currentPage = 1;
  itemsPerPage = 6; // Number of cards to show per page

  get totalPages(): number {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get displayedCards(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Add the hoveredPage property
  hoveredPage: number | null = null;
  clickedPage: number | null = null;
  
  constructor() {}

  ngOnInit(): void {}

  changePage(page: number): void {
    this.currentPage = page;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}