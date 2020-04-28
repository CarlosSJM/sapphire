import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FetchVideosService } from "../../services/fetch-videos.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @ViewChild('video') video: ElementRef;
  @ViewChild('source') source: ElementRef;
  videos: [];
  src: string;
  constructor(private fetchVideosService: FetchVideosService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.fetchVideosService.getVideos().subscribe(data=>{
      console.log(data);
      this.videos = data['data'];
      return this.videos;
    });
  }

  play(src) {
    // `http://127.0.0.1:3000/video/${src}`
    this.source.nativeElement.setAttribute('src', `http://127.0.0.1:3000/video/${src}`);
    this.video.nativeElement.load();
    this.video.nativeElement.play();
    this.video.nativeElement.webkitRequestFullscreen();
  }

}
