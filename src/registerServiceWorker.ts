/* tslint:disable:no-console */
import { register } from 'register-service-worker';
import Noty from 'noty';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registrationOptions: {

    },
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated(registration) {
      console.log('New content is available; please refresh.');
      const n = new Noty({
        theme: 'semanticui',
        layout: 'bottomRight',
        text: '새로운 컨텐츠가 릴리즈 되었습니다. 업데이트 하시겠습니까?',
        buttons: [
          Noty.button('예', 'btn btn-success', () => {
              registration.waiting.postMessage({ action: 'skipWaiting' });
          }, {'id': 'button1', 'data-status': 'ok'}),
      
          Noty.button('아니오', 'btn btn-error', () => {
              n.close();
          }),
        ],
      });
      n.show();
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });

  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) {
      return;
    }

    window.location.reload();
    refreshing = true;

  });
}
