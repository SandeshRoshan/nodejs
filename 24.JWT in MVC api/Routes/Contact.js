import express from 'express'
import { getAllContacts, getContactById, addNewContact, updateContactById, deleteContactById, getContactByUserId } from '../Controllers/Contact.js'
import { Authenticate } from '../Middleware/Auth.js'

const router = express.Router()

//Get all contact
router.get('/', getAllContacts)

//Get specific contact
router.get('/:id',Authenticate, getContactById)

//Add contact
router.post('/add',Authenticate, addNewContact)


//Update contact
router.put('/:id',Authenticate, updateContactById)


//Delete contact
router.delete('/:id',Authenticate, deleteContactById)

//Get user specific contact
router.get('/userid/:id', getContactByUserId)


export default router