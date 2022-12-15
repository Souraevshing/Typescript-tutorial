var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Active"] = "active";
    ContactStatus["Inactive"] = "inactive";
    ContactStatus["New"] = "new";
})(ContactStatus || (ContactStatus = {}));
let contact = {
    id: 1,
    dob: new Date('20/03/1999'),
    address: 'kahalgaon',
    region: 'bhagalpur',
    pinCode: 813204,
    status: ContactStatus.Active,
};
