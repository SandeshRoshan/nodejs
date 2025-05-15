import express from 'express'
import { getAllContacts, getContactById, addNewContact, updateContactById, deleteContactById } from '../Controllers/Contact.js'

const router = express.Router()

//Get all contact
router.get('/', getAllContacts)

//Get specific contact
router.get('/:id', getContactById)

//Add contact
router.post('/add', addNewContact)


//Update contact
router.put('/:id', updateContactById)


//Delete contact
router.delete('/:id', deleteContactById)



export default router