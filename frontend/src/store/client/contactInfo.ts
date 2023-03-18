// Hero Mock data example (in case server is not available)
export const contactMockData = {
  heading: 'Get in Touch',
  description:
    'I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.',
  contactFormInputs: [
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
