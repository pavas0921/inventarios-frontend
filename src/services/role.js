
const API_BASE_URI =  "https://inventarios-backend-irgx.onrender.com";

export const getAllFavsApi = async (token) => {
  try {
    const request = await fetch(`${API_BASE_URI}/role`, {
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
