import {GeneratedApis} from '../types/api-definition';
import {ApiDef} from 'aegis-api-proxy';
export default {
  Home: {
    url: '/',
    method: 'GET'
  },
  blog: {
    getOne: {
      url: '/blog',
      method: 'GET',
      requestData(id: number) {
        return this.r({id});
      }
    },
    save: {
      url: '/blog',
      method: 'POST',
      isFormData: true
    },
    update: {
      url: '/blog',
      method: 'PUT',
      isFormData: true
    },
    remove: {
      url: '/blog',
      method: 'DELETE',
      isFormData: true,
      requestData(id: number) {
        return this.r({id});
      }
    },
    list: {
      url: '/blog/list',
      method: 'GET'
    }
  },
  book: {
    getOne: {
      url: '/book',
      method: 'GET',
      requestData(id: number) {
        return this.r({id});
      }
    },
    save: {
      url: '/book',
      method: 'POST',
      isFormData: true
    },
    update: {
      url: '/book',
      method: 'PUT',
      isFormData: true
    },
    list: {
      url: '/book/list',
      method: 'GET'
    }
  },
  dicts: {
    save: {
      url: '/dicts',
      method: 'POST',
      isFormData: true
    },
    list: {
      url: '/dicts/list',
      method: 'GET',
      requestData(type: string) {
        return this.r({type});
      }
    }
  },
  login: {
    Login: {
      url: '/login',
      method: 'POST',
      isFormData: true
    }
  },
  mood: {
    save: {
      url: '/mood',
      method: 'POST',
      isFormData: true,
      requestData(msg: string) {
        return this.r({msg});
      }
    },
    list: {
      url: '/mood/list',
      method: 'GET'
    }
  },
  msgBoard: {
    save: {
      url: '/msg_board',
      method: 'POST',
      isFormData: true
    },
    list: {
      url: '/msg_board/list',
      method: 'GET'
    }
  },
  register: {
    url: '/register',
    method: 'POST',
    isFormData: false
  }
} as GeneratedApis<ApiDef>;
