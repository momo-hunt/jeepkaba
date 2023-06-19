export const actions = {
  add: async ({ request, locals }) => {
    const data = Object.fromEntries(await request.formData());

    return data;
  },
};
