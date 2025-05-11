import api from "@/composables/useApi";

export const userRepo = {
  getAll() {
    return api.get("/users");
  },
  getById(id: number) {
    return api.get(`/users/${id}`);
  },
};
