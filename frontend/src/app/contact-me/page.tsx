import { contactUrl } from '@/config/apis';
import { ContactData, getContactInfo } from '@/store/server/contact';
import { contactMockData } from '@/store/client/contactInfo';

import { Section, Row } from '@/components/layout';
import { SocialIcons } from '@/components/SocialIcons';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Contact Alex Spencer',
};

export default async function Contact() {
  const sendMessageUrl = `${contactUrl}/send-message`;
  let contactData: ContactData | null = null;

  contactData = await getContactInfo(contactUrl);

  if (!contactData) contactData = contactMockData;
  return (
    <>
      <Section gridContainer className="lg:translate-y-28 lg:pb-28">
        <Row className="flex flex-col gap-14 lg:gap-32">
          <Section className="h-full w-full">
            <Row className="">
              <div className="flex flex-col gap-8 border-y border-light-grey py-12 md:h-full md:self-start lg:flex-row  lg:gap-40">
                <h2 className="min-w-[250px] max-w-md pt-8 text-4xl text-dark-grey lg:flex-1 lg:pt-0">
                  {contactData.heading}
                </h2>

                <div className="flex flex-col items-start gap-8">
                  <p className="max-w-3xl text-dark-grey">{contactData.description}</p>
                  <SocialIcons onLight />
                </div>
              </div>
            </Row>
          </Section>

          <Section className="h-full w-full">
            <Row>
              <div className="flex flex-col gap-8 lg:flex-row  lg:gap-40">
                <h2 className="min-w-[250px] max-w-md text-4xl text-dark-grey lg:flex-1">
                  Contact Me
                </h2>

                <ContactForm
                  formInputs={contactData.contactFormInputs}
                  sendMessageUrl={sendMessageUrl}
                />
              </div>
            </Row>
          </Section>
        </Row>
      </Section>
    </>
  );
}
