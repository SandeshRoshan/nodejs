import { Contact } from "../Models/contact.js"

export const getAllContacts = async (req, res) => {
    const contacts = await Contact.find()
    if (!contacts) return res.status(404).json({ message: 'No Contact found', contacts })
    res.json({ message: 'Contact Fetched', contacts })
}

export const getContactById = async (req, res) => {
    const id = req.params.id
    const idContact = await Contact.findById(id)
    if (!idContact)
        return res.status(404).json({ message: 'No Contact found on given id ', idContact })
    res.json({ message: 'Contact fonud for given id', idContact })
}

export const addNewContact = async (req, res) => {
    const { name, email, phone, type } = req.body
    if (name == ' ' || email == ' ' || phone == ' ' || type == ' ')
        return res.status(404).send({ message: 'All fields are required' })
    const saveContact = await Contact.create({
        name, email, phone, type, user:req.user
    })
    res.json({ message: 'Contact saved successfully!', saveContact })
}

export const updateContactById = async (req, res) => {
    const id = req.params.id
    const { name, email, phone, type } = req.body

    const updateContact = await Contact.findByIdAndUpdate(id, {
        name, email, phone, type,
    }, { new: true })

    if (!updateContact) return res.status(404).json({ message: 'No contact found' })
    res.json({ message: 'Contact Updated!', updateContact })
}

export const deleteContactById = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const deleteContact = await Contact.findByIdAndDelete(id)
    if (!deleteContact) return res.status(404).json({ message: 'Contact not exist!', deleteContact })
    res.json({ message: 'Contact deleted succesfully!', deleteContact })
}

//Get contact by userId
export const getContactByUserId = async (req, res) => {
    const id = req.params.id
    const idContact = await Contact.find({user:id})
    if (!idContact)
        return res.status(404).json({ message: 'No Contact found on given UserId ', idContact })
    res.json({ message: 'Contact fonud for given UserId', idContact })
}