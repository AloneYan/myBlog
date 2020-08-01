import {GeneratedApis} from './api-definition';

declare module'aegis-api-proxy' {

  // import {GenericAPI} from 'aegis-api-proxy';

  interface ApiObject<T> extends GeneratedApis<T> {
    // aaa: GenericAPI<any>;
  }

}