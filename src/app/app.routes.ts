import { Routes } from '@angular/router'

import { routes as routestPath } from './shared/constants/routes.constant'

const CharactersPage = () => import('./presentation/pages/character-page.component').then(m => m.CharacterPageComponent)
const NotFoundPage = () => import('./presentation/pages/not-found-page.component').then(m => m.NotFoundPageComponent)

/**
 * Routes configuration.
 * This defines the routes and their associated components.
 */
export const routes: Routes = [
  {
    path: routestPath.root,
    pathMatch: 'full',
    redirectTo: routestPath.characters
  },
  {
    loadComponent: CharactersPage,
    path: routestPath.characters
  },
  {
    loadComponent: NotFoundPage,
    path: routestPath.notFound
  }
]
