function main() {
  let arrayProjects = Array.from(
    document.querySelectorAll(".card-project__container")
  );

  let index = 0;
  recorrerArray(arrayProjects, index);

  const anterior = document.querySelector(".projects__container__anterior");
  const siguiente = document.querySelector(".projects__container__siguiente");

  siguiente.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("me hizo click el siguiente");

    index++;

    if (index >= arrayProjects.length) {
      index = 0;
      recorrerArray(arrayProjects, index);
    } else {
      recorrerArray(arrayProjects, index);
    }
  });

  anterior.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("me hizo click el anterior");

    index--;

    if (index < 0) {
      index = arrayProjects.length - 1;
      recorrerArray(arrayProjects, index);
    } else {
      recorrerArray(arrayProjects, index);
    }
  });
}

function recorrerArray(arrayProjects, index) {
  arrayProjects.forEach((project, indice) => {
    console.log("el num del array", indice);
    if (indice == index) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

main();
