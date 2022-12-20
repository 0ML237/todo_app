import axios from "axios";

const prefixURL = "http://192.168.33.11:8000/";

export const apiGetAllTask = async () => axios.get(`${prefixURL}task-list/`);
export const apiGetPaginateTask = async (p) => axios.get(`${prefixURL}task-list?p=${p}`);
export const apiAddTask = async (value) => {
   return axios.post(`${prefixURL}task-create/`,value);
};

export const apiDeleteTask = async (id) => axios.delete(`${prefixURL}task-delete/${id}/`);
export const apiUpdateTask = async (task) =>axios.put(`${prefixURL}task-update/${task.get("id")}/`, task);
export const apiDeleteTempTask = async (id) => axios.delete(`${prefixURL}task-temporarilyDelete/${id}/`);
export const apiRestoreDeletedTask = async (id) => axios.put(`${prefixURL}task-restore/${id}/`);

