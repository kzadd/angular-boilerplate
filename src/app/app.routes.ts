import { Routes } from '@angular/router'

import { routePaths } from './shared/constants/routes.constant'

const CharactersPage = () => import('./presentation/pages/character-page.component').then(m => m.CharacterPageComponent)
const NotFoundPage = () => import('./presentation/pages/not-found-page.component').then(m => m.NotFoundPageComponent)

/**
 * Routes configuration.
 * This defines the routes and their associated components.
 */
export const routes: Routes = [
  {
    path: routePaths.root,
    pathMatch: 'full',
    redirectTo: routePaths.characters
  },
  {
    loadComponent: CharactersPage,
    path: routePaths.characters
  },
  {
    loadComponent: NotFoundPage,
    path: routePaths.notFound
  }
]
