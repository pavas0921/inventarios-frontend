const API_BASE_URI =  "https://inventarios-backend-irgx.onrender.com";
export const registerItemAPI = async (body) => {
  try {
    const req = await fetch(`${API_BASE_URI}:4000/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${body.token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const getAllItemApi = async () => {
  try {
    const request = await fetch(`${API_BASE_URI}/item`, {
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
