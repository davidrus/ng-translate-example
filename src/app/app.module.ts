import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { environment } from '../environments/environment'

import {
  I18NEXT_SERVICE,
  I18NextLoadResult,
  I18NextModule,
  ITranslationService,
  defaultInterpolationFormat
} from 'node_modules/angular-i18next'
import * as i18nextLanguageDetector from 'i18next-browser-languagedetector'
import * as i18nextXHRBackend from 'i18next-xhr-backend'

import { AppComponent } from './app.component'
import { ChangeLangComponent } from './change-lang/change-lang.component'

/*
 * Platform and Environment providers/directives/pipes
 */
const i18nextOptions = {
  whitelist: ['en', 'cs'],
  fallbackLng: 'en',
  debug: !environment.production, // set debug
  returnEmptyString: false, // disables empty string as valid translations
  ns: ['translation'],
  interpolation: {
    format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
  },

  // backend plugin options
  backend: {
    loadPath: (langs, ns) => 'http://localhost:3500/{{lng}}.{{ns}}' // BE URL config (Relative or Absolute)
  },

  // lang detection plugin options
  detection: {
    order: ['querystring', 'cookie'], // order and from where user language should be detected
    lookupCookie: 'lang', // keys or params to lookup language from
    caches: ['cookie'] // // cache user language on
  }
}

export function appInit(i18next: ITranslationService) {
  return () => {
    const promise: Promise<I18NextLoadResult> = i18next
      .use(i18nextXHRBackend)
      .use(i18nextLanguageDetector)
      .init(i18nextOptions)
    return promise
  }
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }
]

@NgModule({
  declarations: [AppComponent, ChangeLangComponent],
  imports: [
    FormsModule,
    BrowserModule,
    I18NextModule.forRoot({
      // errorHandlingStrategy: StrictErrorHandlingStrategy
    })
  ],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
