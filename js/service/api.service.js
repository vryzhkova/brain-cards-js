const API_URL = "https://prairie-quickest-hoodie.glitch.me";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/api/category`);

    if (!(response.status === 200 || response.status === 201)) {
      const error = await response.json();
      throw error;
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    return { error };
  }
};

export const fetchCards = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/category/${id}`);

    if (!(response.status === 200 || response.status === 201)) {
      const error = await response.json();
      throw error;
    }

    const cards = await response.json();
    return cards;
  } catch (error) {
    return { error };
  }
};
