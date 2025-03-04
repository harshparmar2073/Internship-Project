import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thexchangemarketplace.com/v1/", // Ensure this is correct
  headers: {
    Apptoken: "X3qGRkZY-BB786BB-XYZ6653-MA2123",
  },
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    
    if (!token && !["/", "/login", "/shop", "/seller", "/buyer"].includes(window.location.pathname) && !window.location.pathname.includes("/admin")) {
      window.location.href = window.location.origin;
    } else if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Ensuring Bearer token format
    }
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (response.data.message === "Please login to continue.") {
      localStorage.removeItem("token");
      localStorage.removeItem("profileAdded");
      window.location.href = window.location.origin;
      return Promise.reject("User not logged in.");
    }
    return response;
  },
  function (error) {
    if (error.response) {
      console.error("API Response Error:", error.response.status, error.response.data);
    } else {
      console.error("Network/Server Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export const toFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key]);
  });
  return formData;
};

export default api;
