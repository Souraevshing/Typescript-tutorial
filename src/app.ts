interface Contact extends Address {
  id: number
  email?: string
  name?: ContactName
  dob: Date
  status: ContactStatus
}

interface Address {
  address: string
  region: string
  pinCode: number
  state?: string
  country?: string
}

enum ContactStatus {
  Active = 'active',
  Inactive = 'inactive',
  New = 'new',
}

let contact: Contact = {
  id: 1,
  dob: new Date('20/03/1999'),
  address: 'kahalgaon',
  region: 'bhagalpur',
  pinCode: 813204,
  status: ContactStatus.Active,
}

type ContactName = string
