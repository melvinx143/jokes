let jokes1 = document.getElementById("jokes1");
let jokes2 = document.getElementById("jokes2");

async function jokes() {
  try {
    let respond = await fetch("https://v2.jokeapi.dev/joke/Any");
    let data = await respond.json();
    if (data.type == "twopart") {
      jokes1.innerHTML = data.setup;
      jokes2.innerHTML = data.delivery;
    } else if (data.type == "single") {
      jokes1.innerHTML = data.joke;
    }
  } catch (error) {
    console.log(error);
  }
}
