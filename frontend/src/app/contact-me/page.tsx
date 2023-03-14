import { Section, Row } from '@/components/layout';
import { SocialIcons } from '@/components/SocialIcons';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Contact Alex Spencer',
};

export default function Home() {
  return (
    <>
      <Section gridContainer className="lg:translate-y-28 lg:pb-28">
        <Row className="flex flex-col gap-14 lg:gap-32">
          <Section className="h-full w-full">
            <Row className="">
              <div className="flex flex-col gap-8 border-y border-light-grey md:h-full md:self-start lg:flex-row  lg:gap-40">
                <h2 className="min-w-[250px] max-w-md pt-8 text-4xl text-dark-grey lg:flex-1 lg:pt-0">
                  {contact.heading}
                </h2>
                <p className="max-w-3xl text-dark-grey">{contact.description}</p>
              </div>

              <SocialIcons />
            </Row>
          </Section>

          <Section className="h-full w-full">
            <Row>
              <div className="flex flex-col gap-8 lg:flex-row  lg:gap-40">
                <h2 className="min-w-[250px] max-w-md text-4xl text-dark-grey lg:flex-1">
                  Contact Me
                </h2>

                <ContactForm formInputs={contact.formInputs} />
              </div>
            </Row>
          </Section>
        </Row>
      </Section>
    </>
  );
}

// Hero Mock data example
const contact = {
  heading: 'Get in Touch',
  description:
    'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. and I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
  formInputs: [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'Alex Spencer',
      required: true,
    },
    {
      label: 'Email Address',
      type: 'email',
      name: 'email',
      placeholder: 'email@example.com',
      required: true,
    },
    {
      label: 'Message',
      type: 'textarea',
      name: 'message',
      placeholder: 'How can I help you?',
      required: true,
    },
  ],
};
