import { ContactForm } from '../components/Elements/ContactForm'
import { ContactList } from '../components/Elements/ContactList'
import { Filter } from '../components/Elements/Filter'

export default function Contacts() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}