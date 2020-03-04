// This is a list of questions that is used for our onboarding process
// three objects depending on if a user is cleaning a home, business, or venue
// we used this to calculate prices and to create the cleaning object in the db
export const homeCleaning = {
  questions: [
    {
      type: 'radio',
      name: 'bedroom',
      title: 'How many bedrooms are in your home?',
      choices: [
        { value: 1, price: 15 },
        { value: 2, price: 20 },
        { value: 3, price: 35 },
        { value: 4, price: 40 },
      ],
    },
    {
      type: 'radio',
      name: 'bathroom',
      title: 'How many bathrooms are in your home?',
      choices: [
        { value: 1, price: 10 },
        { value: 2, price: 20 },
        { value: 3, price: 30 },
        { value: 4, price: 40 },
      ],
    },
    {
      type: '----',
      name: 'squareft',
      title: 'In square feet, what is the area of your home?',
      choices: [
        { value: 1000, price: 40 },
        { value: 1500, price: 60 },
        { value: 2000, price: 80 },
        { value: 2500, price: 100 },
      ],
    },
    {
      type: 'radio',
      name: 'floor',
      title: 'What flooring does your home have?',
      choices: [
        { value: 'carpet', price: 0 },
        { value: 'tile', price: 5 },
        { value: 'hardwood', price: 10 },
        { value: 'laminate', price: 10 },
        { value: 'other', price: 15 },
      ],
    },
    {
      type: 'radio',
      name: 'frequency',
      title: 'How often do you clean your home?',
      choices: [
        { value: 'never', price: 15 },
        { value: 'sometimes', price: 10 },
        { value: 'often', price: 5 },
      ],
    },
  ],
};

export const officeCleaning = {
  questions: [
    {
      type: 'radio',
      name: 'offices',
      title: 'How many individual cubicles/tables are there?',
      choices: [
        { value: 1, price: 15 },
        { value: 2, price: 20 },
        { value: 3, price: 35 },
        { value: 4, price: 40 },
      ],
    },
    {
      type: 'radio',
      name: 'bathroom',
      title: 'How many bathrooms does your office have?',
      choices: [
        { value: 1, price: 10 },
        { value: 2, price: 20 },
        { value: 3, price: 30 },
        { value: 4, price: 40 },
      ],
    },
    {
      type: 'radio',
      name: 'squareft',
      title: 'In square feet, what is the area of your office?',
      choices: [
        { value: 1000, price: 40 },
        { value: 1500, price: 60 },
        { value: 2000, price: 80 },
        { value: 2500, price: 100 },
      ],
    },
    {
      type: 'radio',
      name: 'frequency',
      title: 'How often would you need cleaning services?',
      choices: [
        { value: 'weekly', price: 5 },
        { value: 'biweekly', price: 10 },
        { value: 'monthly', price: 15 },
      ],
    },
  ],
};

export const venueCleaning = {
  questions: [
    {
      type: 'radio',
      name: 'guest-count',
      title: 'How many guests are you expecting?',
      choices: [
        { value: '0-25', price: 20 },
        { value: '26-50', price: 30 },
        { value: '51-75', price: 40 },
        { value: '76-10', price: 50 },
      ],
    },
    {
      type: 'radio',
      name: 'bathroom',
      title: 'How many bathrooms are there in the venue?',
      choices: [
        { value: 1, price: 10 },
        { value: 2, price: 20 },
        { value: 3, price: 30 },
        { value: 4, price: 40 },
      ],
    },
    {
      type: 'radio',
      name: 'squareft',
      title: 'In square feet, what is the area of the venue?',
      choices: [
        { value: 1000, price: 40 },
        { value: 1500, price: 60 },
        { value: 2000, price: 80 },
        { value: 2500, price: 100 },
      ],
    },
  ],
};
