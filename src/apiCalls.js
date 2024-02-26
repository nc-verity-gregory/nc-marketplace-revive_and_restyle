import axios from "axios";

const marketPlace = axios.create({
  baseURL: "https://nc-marketplace-sem-1.onrender.com/api",
});

export const getCategories = async () => {
  try {
    const {
      data: { categories },
    } = await marketPlace.get("/categories");
    return categories;
  } catch (err) {
    console.log(err);
  }
};

export const getItems = async (queries) => {
  try {
    const {
      data: { items },
    } = await marketPlace.get("/items", {
      params: queries,
    });
    return items;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (username) => {
  try {
    const {
      data: { user },
    } = await marketPlace.get(`/users/${username}`);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const addToBasket = async (item_id, username) => {
  try {
    const {
      data: { item },
    } = await marketPlace.post(`/users/${username}/basket`, {
      item_id,
    });

    return item;
  } catch (err) {
    console.log(err);
  }
};

export const getUserBasketItems = async (username) => {
  try {
    const {
      data: { items },
    } = await marketPlace.get(`/users/${username}/basket`);

    return items;
  } catch (err) {
    console.log(err);
  }
};
