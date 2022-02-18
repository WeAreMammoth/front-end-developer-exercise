export const state = {
  header: "hello",
  pricingOptions: [
    {
      name: 'Free',
      cost: 0,
      features: [
        '10 users included',
        '2 GB of storage',
        'Email support',
        'Help center access',
      ],
      cta: 'Sign up for free',
      paid: false,
      variant: 'outline-primary',
    },
    {
      name: 'Pro',
      cost: 15,
      features: [
        '20 users included',
        '10 GB of storage',
        'Priority email support',
        'Help center access',
      ],
      cta: 'Get started',
      paid: true,
      variant: "primary",
    },
    {
      name: 'Enterprise',
      cost: 29,
      features: [
        '30 users included',
        '15 GB of storage',
        'Phone and email support',
        'Help center access',
      ],
      cta: 'Contact us',
      paid: true,
      variant: "primary",
    },
  ],
  chosenPlan: null,
};

export const getters = {
  pricingOptions(state) {
    return state.pricingOptions;
  },

};

export const mutations = {
  updateChosenPlan(state, newPlan) {
    state.chosenPlan = newPlan
  }
};
