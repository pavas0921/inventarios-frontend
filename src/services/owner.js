const API_BASE_URI =  "https://inventarios-backend-irgx.onrender.com";
export const getAllOwnersApi = async () => {
  try {
    const request = await fetch(`${API_BASE_URI}/owner`, {
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

export const getAOwnersByCedulaApi = async (id) => {
  console.log(id);
  try {
    const request = await fetch(`${API_BASE_URI}/owner/${id}`, {
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

export const registerOwnerAPI = async (body) => {
  try {
    const req = await fetch(`${API_BASE_URI}/owner`, {
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
