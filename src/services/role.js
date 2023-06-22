export const getAllFavsApi = async (token) => {
  try {
    const request = await fetch(`http://localhost:4000/role`, {
      method: "GET",
      headers: {
        //Authorization: `Bearer ${token}`,
      },
    });
    const data = await request.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};
