import { Component, Inject } from '@angular/core'
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next'

interface Nav {
  link: string
  name: string
  exact: boolean
}

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <div>{{ 'test_key' | i18next }}</div>
    <div>{{ title }}</div>
    <div>{{ 'app.nextLevel' | i18next }}</div>
    <div>{{ 'app.withFormat' | i18next: { year: 2018 } }}</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(I18NEXT_SERVICE) private tService: ITranslationService) {}

  name = this.tService.t('app.name')
  title = this.tService.t('app.title')
}
