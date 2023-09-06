const API_BASE_URI =  "https://inventarios-backend-irgx.onrender.com";
export const getAllPropertiesAPI = async () => {
  try {
    const request = await fetch(`${API_BASE_URI}/property`, {
      method: "GET",
      headers: {
        //Authorization: `Bearer ${token}`,
      },
    });
    const data = await request.json();
    console.log("***");
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};

export const registerPropertyAPI = async (body) => {
  try {
    const req = await fetch(`${API_BASE_URI}/property`, {
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

export const getPropertiesByTenantIdAPI = async (body) => {
  console.log(body);
  try {
    const request = await fetch(
      `${API_BASE_URI}/property/tenant/${body}`,
      {
        method: "GET",
        headers: {
          //Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await request.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};
