import { TaskAbortError } from "@reduxjs/toolkit";
import http from "../http-common";

class taskDataService {
  getAll() {
    return http.get("task-list/");
  }
  get(id) {
    return http.get(`task-list/${id}`);
  }

  create(data) {
    return http.post("task-create/", data);
  }

  update(id, data) {
    return http.put(`task-update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`task-delete/`);
  }
  findByTitle(title) {
    return http.get(`task-list/?title=${title}`);
  }
}

export default new taskDataService();
