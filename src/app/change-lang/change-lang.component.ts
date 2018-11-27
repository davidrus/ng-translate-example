import { Component, Inject } from '@angular/core'
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next'

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.scss']
})
export class ChangeLangComponent {
  selectedLang = 'en'

  constructor(@Inject(I18NEXT_SERVICE) private tService: ITranslationService) {}

  change(value: string) {
    console.log(`value changed to ${value}`)
    this.tService.changeLanguage(value)
  }
}
