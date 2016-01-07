import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app-component/app.component'
import {MyService} from './my-service'

bootstrap(AppComponent, [MyService]);