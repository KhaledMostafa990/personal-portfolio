export interface ContactInputsValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

// Contact Data API Response
export interface ContactData {
  id?: string;
  heading: string;
  description: string;
  contactFormInputs: ContactFormInputProps[];
}

// Get Contact data from API
export const getContactInfo = async (url: string): Promise<ContactData | null> => {
  try {
    const response = await fetch(`${url}/info`);
    const data = await response.json();
    console.log('data:', data);
    return data.contactInfo;
  } catch (error) {
    console.error('Server Error:', error);
    return null;
  }
};

// Post Contact Message to API
export const postContactMessage = async (
  url: string,
  contact: ContactInputsValues,
): Promise<boolean> => {
  try {
    const response = await fetch(`${url}/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    const data = await response.json();
    console.log('data:', data);
    return data;
  } catch (error) {
    // console.error('Server Error:', error);
    return false;
  }
};
