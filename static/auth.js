export const logs = () => {
  const username = document.getElementById("plc-usr").value;
  const password = document.getElementById("plc-pass").value;
  if (username === "sunny" && password === "12345") {
    window.location.assign("http://localhost:8000/createmap");
  }
};
