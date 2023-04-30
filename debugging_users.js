fetch("http://77.68.4.18:9090/api/users/grumpy19")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const responseClone = response.clone();
    responseClone.text().then((text) => {
      console.log("Raw text response:", text);
    });
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
