import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { createMyValueProvider } from 'providers';

// import { Provider } from "@angular/core";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const myValueProvider = createMyValueProvider((window as any).test);
platformBrowserDynamic([myValueProvider]).bootstrapModule(AppModule)
  .catch(err => console.error(err));

// class Renderer {

// }
// interface IRender<T> {
//   createTextElement(content: string): T;
// }


// class DOMRenderer implements IRender<HTMLElement> {
//   private createElement(elementType: string, content: string) {
//     const el = document.createElement(elementType);
//     el.textContent = content;
//     return el;
//   }

//   createTextElement(content: string): HTMLElement {
//     return this.createElement('p', content);
//   }
// }
// class MDRenderer implements IRender<any>{
//   createTextElement(content: string) {
//     return '```' + { content } + '```';
//   }
// }
// const renderer = new DOMRenderer();

// const providers: Provider[] = [
//   {
//     provide: Renderer,
//     useClass: DOMRenderer
//   }
// ]
// const providers2: Provider[] = [
//   {
//     provide: Renderer,
//     useClass: MDRenderer
//   }
// ]


// renderer.createTextElement('Hello World');


