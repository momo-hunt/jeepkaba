export const handle = async ({ event, resolve }) => {
  // event.cookies.set("name", "hari bro", {
  //   path: "/",
  //   maxAge: 1000 * 60 * 60 * 24,
  //   httpOnly: true,
  // });

  const response = await resolve(event);
  return response;
};
