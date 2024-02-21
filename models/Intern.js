import db from '../db/index.js';

class Intern {
  static async create(name, address, dob, selection) {
    return await db('intern_data').insert({ name, address, dob, selection});
  }

  static async getAll() {
    return await db('intern_data').select('*');
  }

  static async getById(id) {
    return await db('intern_data').where({ id }).first();
  }

  static async update(id, name, address, dob, selection) {
    return await db('intern_data').where({ id }).update({ name, address, dob, selection});
  }

  static async delete(id) {
    return await db('intern_data').where({ id }).del();
  }
}

export default Intern;
