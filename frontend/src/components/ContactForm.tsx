'use client';

import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { PrimaryButton } from '@/components/base';
import {
  postContactMessage,
  ContactFormInputProps,
  ContactInputsValues,
} from '@/store/server/contact';
import { useAlertContext } from '@/store/AlertContext';

export function ContactForm({
  formInputs,
}: {
  formInputs: ContactFormInputProps[];
  sendMessageUrl: string;
}) {
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().min(20).max(200).required('Message is required'),
  });

  const { onOpen } = useAlertContext();

  const validateInput = (input: string, getFieldMeta: any) => {
    return !!(getFieldMeta(input).touched && !getFieldMeta(input).error);
  };

  const handleContactSubmit = async (
    values: ContactInputsValues,
    { setSubmitting }: FormikHelpers<ContactInputsValues>,
  ) => {
    try {
      console.log(values);
      const success = await postContactMessage();

      if (success) {
        // alert('Thank you for your message! We will be in touch soon.');
        onOpen('success', 'Thank you for your message! We will be in touch soon.');
      }
      setSubmitting(false);
    } catch (error) {
      // alert('Oops! Something went wrong. Please try again later.');
      onOpen('error', 'Oops! Something went wrong. Please try again later.');
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={handleContactSubmit}
    >
      {({ isSubmitting, getFieldMeta }) => (
        <Form className="flex w-full flex-col justify-center gap-8">
          {formInputs.map((input) => (
            <InputControl key={input.name}>
              <label className="bg-transparent text-dark-grey" htmlFor={input.name}>
                {input.label}
              </label>
              <Field
                className={`h-12 border-b-2 border-transparent bg-dark-grey/5 px-2 
                text-[13px] text-dark-grey placeholder:italic  placeholder:text-dark-grey/50
               focus:border-primary-default focus:outline-none
                ${validateInput(input.name, getFieldMeta) && 'border-primary-default'}`}
                type={input.type}
                name={input.name}
                id={input.name}
                as={input.type === 'textarea' ? 'textarea' : 'input'}
                col={input.type === 'textarea' ? 20 : 0}
                row={input.type === 'textarea' ? 10 : 0}
                height={input.type === 'textarea' ? '100' : ''}
                style={{ height: input.type === 'textarea' ? 100 : '' }}
                placeholder={input.placeholder}
              />
              <ErrorMessageWrapper input={input.name} />
            </InputControl>
          ))}

          <PrimaryButton withIcon={false} classes={'px-10 w-fit'}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
}

function InputControl({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative flex w-full flex-col gap-3 border-b-2 border-white/20 ${className}`}>
      {children}
    </div>
  );
}

function ErrorMessageWrapper({ input }: { input: string }) {
  return (
    <div className="text-md absolute bottom-2 right-4 flex items-center gap-3 italic text-error">
      <ErrorMessage name={input}>
        {(msg) => (
          <>
            {msg}
            {/* <Image src={errorIcon} alt="error icon" width={16} height={16} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="none" fill-rule="evenodd">
                <circle cx="10" cy="10" r="10" fill="#fafafa" />
                <path fill="#F43030" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
              </g>
            </svg>
          </>
        )}
      </ErrorMessage>
    </div>
  );
}
