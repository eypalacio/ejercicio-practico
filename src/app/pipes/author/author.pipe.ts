import { Pipe, PipeTransform } from '@angular/core';
import { graphql_post } from 'src/app/graphql/posts/graphql-post.model';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(value: any,args: any): any {
    if(!value) return null;
    if(!args) return value;
    args=args.toLowerCase();

    return value.filter(function(item:graphql_post){
      return JSON.stringify(item.user).toLowerCase().includes(args);
    })
  }

}
