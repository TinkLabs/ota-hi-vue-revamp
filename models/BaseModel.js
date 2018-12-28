import axios from 'axios';
import jwt from 'jsonwebtoken';
import curlirize from 'axios-curlirize';
import client from '../config/redis';

// only for console log
curlirize(axios);

class BaseModel {
  async getSiteId() {
    let siteId = await client.getAsync('site_id');
    if (!siteId) {
      const response = await this.siteConfigure();
      siteId = response.data.config.site_id;
      client.set('site_id', siteId, 'EX', 30000);
    }
    return siteId;
  }

  async getToken() {
    let token = await client.getAsync('jwt_token');
    if (!token) {
      const response = await this.auth();
      ({
        token,
      } = response.data);
      const decodedToken = jwt.decode(token);

      // TODO: private key
      // try {
      //   decodedToken = jwt.verify(response.data.token);
      // } catch (err) {
      //   console.log('Invalid token');
      // }

      if (token) {
        const expiryTime = decodedToken.exp - Math.floor(Date.now() / 1000) - 5;
        client.set('jwt_token', token, 'EX', expiryTime);
      }
    }

    return token;
  }

  auth() {
    return axios({
      url: 'https://bdirectapi-qa.build.whmwebservices.com/auth',
      method: 'POST',
      data: {
        username: 'test@team',
        password: '654321',
      },
    });
  }

  siteConfigure() {
    return this.request({
      url: 'https://bdirectapi-qa.build.whmwebservices.com/getconfig',
      method: 'POST',
      data: {
        site_url: 'https://thweb-qa.build.whmwebservices.com',
      },
    });
  }

  async get(url, params) {
    return this.request({
      method: 'get',
      url,
      data: Object.assign({
        site_id: await this.getSiteId(),
      }, params),
    });
  }

  async post(url, data) {
    return this.request({
      method: 'post',
      url,
      data: Object.assign({
        site_id: await this.getSiteId(),
      }, data),
    });
  }


  async postForm(url, form) {
    form.append('site_id', await this.getSiteId());
    return this.request({
      method: 'post',
      url,
      headers: form.getHeaders(),
      data: form,
    });
  }

  async patch(url, data) {
    return this.request({
      method: 'patch',
      url,
      data: Object.assign({
        site_id: await this.getSiteId(),
      }, data),
    });
  }

  async postWithJson(url, data) {
    const token = await this.getToken();
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    console.log('URL: ', url);
    try {
      return await axios(Object.assign({
        method: 'post',
        url,
        data: Object.assign({
          site_id: 31271,
        }, data),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        json: true,
      }));
    } catch (err) {
      console.error('Error: ', err);
      throw err;
    }
  }

  async request(config) {
    const token = await this.getToken();
    const requestCongif = config;
    const tempHeaders = requestCongif.headers;
    requestCongif.headers = Object.assign({
      Authorization: `Bearer ${token}`,
    }, tempHeaders);
    return axios(Object.assign({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }, config));
  }
}

export default BaseModel;
