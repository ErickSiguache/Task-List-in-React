export function getItem(nameVariableLocal) {
  const saved = localStorage.getItem(nameVariableLocal);
  return saved ? saved : null;
}

export function setItem(nameVariableLocal, insertValue) {
  localStorage.setItem(nameVariableLocal, JSON.stringify(insertValue));
}
