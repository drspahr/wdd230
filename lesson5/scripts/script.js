const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', function() {
    const book = input.value;
    document.querySelector("#favchap").value= '';

    if (book.length > 0) {
        const listItem = document.createElement("li");
        listItem.textContent = book;
        const delBut = document.createElement("button");
        delBut.innerHTML = "&#10060;"

        listItem.appendChild(delBut);
        list.appendChild(listItem);

        delBut.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus();
        input.setAttribute("placeholder", "");
    } else {
        alert("Please Enter A Book And Chapter");
        input.focus();
    }
});