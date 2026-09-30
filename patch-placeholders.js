const fs = require('fs');
const path = './messages/en.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

if (!data.Contact.formNamePlaceholder) {
  data.Contact.formNamePlaceholder = "John Doe";
  data.Contact.formEmailPlaceholder = "john@example.com";
  data.Contact.formSubjectPlaceholder = "How can we help?";
  data.Contact.formMessagePlaceholder = "Write your message here...";
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully patched Contact placeholders in en.json');
