const API_BASE_URI =  "https://inventarios-backend-irgx.onrender.com";
export const registerUserAPI = async (body) => {
  try {
    const req = await fetch(`${API_BASE_URI}/user`, {
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

export const loginAPI = async (body) => {
  try {
    const req = await fetch(`${API_BASE_URI}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};
