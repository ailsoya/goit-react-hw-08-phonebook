import { ContactForm } from '../components/Elements/ContactForm'
import { ContactList } from '../components/Elements/ContactList'
import { Filter } from '../components/Elements/Filter'
import { Helmet } from 'react-helmet'

export default function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}