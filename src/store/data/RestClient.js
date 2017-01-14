// import fetch from 'isomorphic-fetch';

class RestClient {

  constructor(uri) {
    this.uri = uri;
  }

  requestData(path, cb) {

    path = this.uri + '/' + path;

    fetch(path)
    .then(response => {

      if (!response.ok) {
        const err = new Error('Request failed');
        err.response = response;
        cb(err, {});

      } else {
        response.json().then(data => {
          cb(null, data);
        });

      }

    })
    .catch(err => {
      cb(err, {});
    });
  }
}

export default RestClient;
