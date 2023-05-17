export class Recipe {
  id?: number = undefined;
  name: string = '';
  authorId: number = 0;
  text: string = '';
  tags: string[] = [];
  image: string = '';
  status: boolean = false;
  datePublished: number = 0;
}
