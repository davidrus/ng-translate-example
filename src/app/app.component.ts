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
    <div class="main-view">
      <h1>{{ name }}</h1>
      <div>{{ 'test_key' | i18next }}</div>
      <div>{{ title }}</div>
      <div>{{ 'app.withFormat' | i18next: { year: 2018 } }}</div>
      <h3>Single/Plural</h3>
      <div>{{ 'app.keyWithCount' | i18next: { count: 1 } }}</div>
      <div>{{ 'app.keyWithCount' | i18next: { count: 65 } }}</div>
      <h3>Interval</h3>
      <div>{{ 'key_upper' | i18next: { text: 'testing text' } }}</div>
      <h3>Array</h3>
      <div>{{ 'array.0' | i18next }}</div>
      <div>{{ 'array.1' | i18next }}</div>
      <div>{{ 'array.2' | i18next }}</div>
      <div>{{ 'array.3' | i18next }}</div>
      <div>{{ 'array.4' | i18next }}</div>

      <h4>Example of deep object</h4>
      <div>{{ 'admin.users.headers.title' | i18next }}</div>

      <h5>Non Existing Key</h5>
      <div>{{ 'non.existing.key' | i18next }}</div>

      <app-change-lang></app-change-lang>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(I18NEXT_SERVICE) private tService: ITranslationService) {}

  name = this.tService.t('app.name')
  title = this.tService.t('app.title')
}
