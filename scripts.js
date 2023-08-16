const addCountButton = document.getElementById("addCount");
const remCountButton = document.getElementById("remCount");
const remIcon = document.getElementById('remove')
const trashIcon = document.getElementById('trash')
const textCount = document.getElementById("number-quantidade");

let initialValue = 1;

if (actualItemValue == null) {
    localStorage.setItem('qtd-item', initialValue);
};

var actualItemValue = localStorage.getItem("qtd-item");


function RemCount() {
    if (actualItemValue <= 1) {
        remIcon.style.display = "none";
        trashIcon.style.display = "block";
        return
    } else {
        localStorage.setItem('qtd-item', actualItemValue--);
        textCount.innerText = `${actualItemValue}`
        console.log("Revovi um item");
        remIcon.style.display = "block";
        trashIcon.style.display = "none";
    }

};

function AddCount() {
    if (actualItemValue >= 1) {
        localStorage.setItem('qtd-item', actualItemValue++);
        textCount.innerText = `${actualItemValue}`;
        trashIcon.style.display = "none";
        remIcon.style.display = "block";
        return
    }
};

