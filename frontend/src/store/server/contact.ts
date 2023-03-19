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
    // console.log('data:', data);
    return data.contactInfo;
  } catch (error) {
    console.error('Server Error:', error);
    return null;
  }
};

// Post Contact Message example for preview purposes
export const postContactMessage = async (
  url: string,
  contact: ContactInputsValues,
): Promise<boolean> => {
  
    // return a fake promise with 50% chance of success or failure
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() >= 0.5;
        if (success) {
          resolve(true);
          return true;
        } else {
          reject(false);
          return false;
        }
      }, 1000);
    });

}

// Post Contact Message to API server
// export const postContactMessage = async (
//   url: string,
//   contact: ContactInputsValues,
// ): Promise<boolean> => {  
  // try {
  //   const response = await fetch(`${url}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(contact),
  //   });

  //   const data = await response.json();
  //   console.log('data:', data);
  //   return data;
  // } catch (error) {
  //   // console.error('Server Error:', error);
  //   return false;
  // }
// };
