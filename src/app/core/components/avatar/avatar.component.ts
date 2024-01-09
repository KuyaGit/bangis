import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements OnInit{
  _auth = inject(AuthService)
  @Input() userName!: string
  ngOnInit(): void {
  }
}
