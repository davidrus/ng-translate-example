import { Component } from '@angular/core'

interface Nav {
  link: string
  name: string
  exact: boolean
}

@Component({
  selector: 'app-root',
  template: `
    <div>{{ 'test_key' | i18next }}</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'ngTest'
}
