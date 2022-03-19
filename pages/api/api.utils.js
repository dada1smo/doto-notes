import axios from 'axios';

class Api {
  constructor(uri) {
    this.api = axios.create({
      baseURL: uri,
    });
  }

  getAll = async () => {
    try {
      const { data } = await this.api.get('/');
      return data;
    } catch (error) {
      throw error.response;
    }
  };
}

export default new Api('https://lab-todos-api.herokuapp.com/todos');
