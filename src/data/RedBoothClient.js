import RestClient from './RestClient';
import config from '../config';

class RedBoothClient extends RestClient {

  constructor() {
    super(config.server.uri);
    this.paths = config.server.paths;
  }

  fetchBoard(cb) {
    this.requestData(this.paths.board, cb);
  }

}

export default RedBoothClient;
