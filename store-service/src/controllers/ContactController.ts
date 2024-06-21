import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Contact } from '../entity';

export class ContactController {
    public async createContact(req: Request, res: Response): Promise<Response> {

        const contactRepository = AppDataSource.getRepository(Contact);
        const newContact = contactRepository.create(req.body);
        contactRepository.save(newContact)
        return res.json(newContact)

    }

    public async getContacts(req: Request, res: Response): Promise<Response> {
        const contactRepository = AppDataSource.getRepository(Contact);
        const contact = await contactRepository.find();
        return res.json(contact);
    }


    public async updateContact(req: Request, res: Response): Promise<Response> {
        const contactRepository = AppDataSource.getRepository(Contact);
        let contact = await contactRepository.findOne({ where: Number({ id: req.params.id }) });
        if (!contact) {
            return res.status(404).json({ message: 'contact not found' });
        }
        contactRepository.merge(contact, req.body);
        const result = await contactRepository.save(contact);
        return res.json(result);
    }

    public async getContactById(req: Request, res: Response): Promise<Response> {
        const contactRepository = AppDataSource.getRepository(Contact);
        let contact = await contactRepository.findOne({ where: Number({ id: req.params.id }) });
        if (!contact) {
            return res.status(404).json({ message: 'contact not found' });
        }
        return res.json(contact);
    }

    public async patchContact(req: Request, res: Response): Promise<Response> {
        try {
            const contactRepository = AppDataSource.getRepository(Contact);
            const contact = await contactRepository.findOne({ where: Number({ id: req.params.id }) });

            if (!contact) {
                return res.status(404).json({ message: 'contact not found' });
            }

            Object.keys(req.body).forEach((key) => {
                Contact[key] = req.body[key];
            });

            const result = await contactRepository.save(contact);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error to update contact' });
        }
    }

    public async deleteContact(req: Request, res: Response): Promise<Response> {
        const contactRepository = AppDataSource.getRepository(Contact);
        const result = await contactRepository.delete(req.params.registerId);
        if (result.affected === 0) {
            return res.status(404).json({ message: 'contact not found' });
        }
        return res.status(204).send();
    }
}
