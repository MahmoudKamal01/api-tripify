import axios from "axios";
import { BASE_URL } from "../configs/keys";

const getPlaceDetails = async (placeName, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/get-place-details`,
      {
        searchQuery: placeName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for ${placeName}:`, error.message);
    return null;
  }
};

export default getPlaceDetails;
