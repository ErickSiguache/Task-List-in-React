import { getItem, setItem } from "../utils/localstorage-consult";

const LOCAL_STORAGE_KEY = "todo:tasks";

export function getTasks() {
  return getItem(LOCAL_STORAGE_KEY);
}

export function insertTasks(valuesInsert) {
  setItem(LOCAL_STORAGE_KEY, valuesInsert);
}
