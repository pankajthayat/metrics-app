import {  SAVE_ENGINEERING} from '../constants/types'
import axios from "axios";
import { ADD_ENGINEERING_URL } from "../components/Constants/constants"

export const saveEngineering = (engineeringData) => {
  axios.defaults.headers.post["userName"] = "Krishna";
  axios.post(ADD_ENGINEERING_URL,engineeringData)
    .then(res => {
    });

  return {
    type: SAVE_ENGINEERING,
    updates: engineeringData
  };
}