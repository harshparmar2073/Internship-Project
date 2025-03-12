import axios from "axios";

// Create an Axios instance with baseURL from Vite environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL|| "https://api.thexchangemarketplace.com/v1/",
  headers: {
    Apptoken: "X3qGRkZY-BB786BB-XYZ6653-MA2123",
  },
});

// Request Interceptor: Adds Authorization token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (!token && window.location.pathname !== "/" && window.location.pathname !== "/Shop") {
      console.log("Token missing, redirecting to home");
      // window.location.href = "/";
      // return Promise.reject("No authentication token");
    }

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor: Handles session expiration
api.interceptors.response.use(
  (response) => {
    if (response.data.message === "Please login to continue.") {
      console.log("Session expired, redirecting to login");
      localStorage.removeItem("token");
      localStorage.removeItem("profileAdded");
      // window.location.href = "/";
      return Promise.reject("Session expired");
    }
    return response;
  },
  (error) => {
    console.error("Response interceptor error:", error);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    } else if (error.request) {
      console.error("No response received. Request:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }

    return Promise.reject(error);
  }
);

// Utility function to convert objects into FormData
export const toFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key]);
  });
  return formData;
};

export default api;
