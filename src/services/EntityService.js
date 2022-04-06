import client from "../api/client";

export default class EntityService {
  route;
  apiClient;

  constructor(route) {
    this.route = route;
    this.apiClient = client;
  }

  async getAll(page, limit, sortBy, sortDesc) {
    return await client.get(this.route, {
      params: { page, limit, sortBy, sortDesc },
    });
  }

  async getById(id) {
    return await client.get(`${this.route}/${id}`);
  }

  async insert(entity) {
    return await client.post(this.route, entity);
  }

  async update(entity) {
    return await client.put(this.route, entity);
  }

  async delete(id) {
    return await client.delete(`${this.route}/${id}`);
  }
}
