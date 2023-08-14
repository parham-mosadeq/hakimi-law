import ContactUsInfo from '../modules/contact-us/ContactUsInfo';
import ContactUsLocation from '../modules/contact-us/ContactUsLocation';
import ContactUsTitles from '../modules/contact-us/ContactUsTitles';

function ContactUsPage() {
  return (
    <section>
      <ContactUsTitles />
      <ContactUsInfo />
      <ContactUsLocation />
    </section>
  );
}

export default ContactUsPage;
 