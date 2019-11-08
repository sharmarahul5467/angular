import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { BasicHighlightDirective } from './directive-example/directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive-example/directive/batter-highlight/better-highlight.directive';
import { UnlessDirective } from './directive-example/directive/unless/unless.directive';
import { DropdownDirective } from './shared/Directive/dropdown.directive';
import { ServicesStartComponent } from './services-start/services-start.component';
import { AccountComponent } from './services-start/account/account.component';
import { NewAccountComponent } from './services-start/new-account/new-account.component';
import { UserComponent } from './user/user.component';
import { ActiveUsersComponent } from './user/active-users/active-users.component';
import { InactiveUsersComponent } from './user/inactive-users/inactive-users.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DirectiveExampleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    ServicesStartComponent,
    AccountComponent,
    NewAccountComponent,
    UserComponent,
    ActiveUsersComponent,
    InactiveUsersComponent



  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
