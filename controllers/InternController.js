import InternService from '../services/InternService.js';

class InternController {
  static async create(req, res) {
    const { name, address, dob, selection } = req.body;
    try {
      const result = await InternService.create(name, address, dob, selection);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const interns = await InternService.getAll();
      res.json(interns);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const intern = await InternService.getById(id);
      if (!intern) {
        return res.status(404).json({ error: "Intern not found" });
      }
      res.json(intern);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const { name, address, dob, selection} = req.body;
    try {
      await InternService.update(id, name, address, dob, selection);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await InternService.delete(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default InternController;
