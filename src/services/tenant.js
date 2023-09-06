const API_BASE_URI =  "https://inventarios-backend-irgx.onrender.com";

export const getAllTenantsApi = async () => {
  try {
    const request = await fetch(`${API_BASE_URI}/tenant`, {
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

export const getTenantsByCedulaApi = async (id) => {
  try {
    const request = await fetch(`${API_BASE_URI}/tenant/${id}`, {
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

export const registerTenantAPI = async (body) => {
  try {
    const req = await fetch(`${API_BASE_URI}/tenant`, {
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
