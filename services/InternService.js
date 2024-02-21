import Intern from '../models/Intern.js';

class InternService {
  static async create(name, address, dob, selection) {
    return await Intern.create(name, address, dob, selection);
  }

  static async getAll() {
    return await Intern.getAll();
  }

  static async getById(id) {
    return await Intern.getById(id);
  }

  static async update(id, name, address, dob, selection) {
    return await Intern.update(id, name, address, dob, selection);
  }

  static async delete(id) {
    return await Intern.delete(id);
  }
}

export default InternService;
