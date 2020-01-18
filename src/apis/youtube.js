import axios from "axios";
const KEY = "AIzaSyD_NZH1nsiwPDPWRui_KllJpz0_m5ScbL4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
