import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'cr-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass'],
})
export class RecipeComponent implements OnChanges {
  @Input() recipe!: Recipe;
  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter();
  isExpanded: boolean = false;
  author: string = '';

  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.recipe.authorId !== undefined) {
      console.log(this.recipe.authorId);
      this.userService.getUser(this.recipe.authorId).subscribe((x) => {
        console.log(x);
        return (this.author = `${x.firstName} ${x.lastName}`);
      });
    }
  }

  close(): void {
    this.closeEmitter.emit(true);
  }

  isAdmin(): boolean {
    return this.loginService.isAdmin();
  }
}
