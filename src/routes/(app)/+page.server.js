export const load = ({ cookies }) => {
  const name = cookies.get("name");
  if (name) {
    return { name };
  }
};
