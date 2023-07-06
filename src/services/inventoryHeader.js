export const registerInventoryHeaderAPI = async (body) => {
  try {
    const req = await fetch("http://localhost:4000/inventoryHeader", {
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

export const getInventoryByPropertyApi = async (propertyId) => {
  try {
    const request = await fetch(
      `http://localhost:4000/inventoryHeader/${propertyId}`,
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
