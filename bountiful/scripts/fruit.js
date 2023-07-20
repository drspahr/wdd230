const fruitUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruit() {
    try {
        const response = await fetch(fruitUrl);
        if (response.ok) {
            const fruitData = await response.json();
            // console.log(fruitData);
            listFruitData(fruitData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getFruit();

function listFruitData(fruit) {
    const fopt = document.querySelector("#loptions");

    fruit.forEach((fruit) => {
        let opt = document.createElement("option");
        opt.setAttribute("value", `${fruit.name}`);
        fopt.appendChild(opt);
    });
}

const order = document.querySelector("#formsub");
order.addEventListener('click', displayOrder());

function displayOrder() {
    let fname = document.getElementById("#fname").value;
    let email = document.getElementById("#e_mail").value;
    console.log(fname, email);
}