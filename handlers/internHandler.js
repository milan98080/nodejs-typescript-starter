import Joi from 'joi';

export function internValidationMiddleware(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required().disallow('admin'),
        address: Joi.string().required(),
        date_of_birth: Joi.date().required(),
        selection_status: Joi.boolean(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

export async function createIntern(req, res, db) {
    try {
        const { name, address, date_of_birth, selection_status } = req.body;
        const [id] = await db('interns').insert({ name, address, date_of_birth, selection_status });
        res.status(201).json({ id });
    } catch (error) {
        console.error('Error creating intern:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getInterns(req, res, db) {
    try {
        const interns = await db.select().from('interns');
        res.json(interns);
    } catch (error) {
        console.error('Error fetching interns:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function updateIntern(req, res, db) {
    try {
        const { id } = req.params;
        const { name, address, date_of_birth, selection_status } = req.body;
        await db('interns').where({ id }).update({ name, address, date_of_birth, selection_status });
        res.json({ message: 'Intern updated successfully' });
    } catch (error) {
        console.error('Error updating intern:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function deleteIntern(req, res, db) {
    try {
        const { id } = req.params;
        await db('interns').where({ id }).del();
        res.json({ message: 'Intern deleted successfully' });
    } catch (error) {
        console.error('Error deleting intern:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
