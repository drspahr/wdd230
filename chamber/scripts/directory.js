const url = "json/data.json";

async function getCompanies(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayCompany(data.business);
    }
}

getCompanies(url);

const displayCompany = (data) => {
    const dirList = document.querySelector(".dirlist");

    data.forEach((item) => {
        // Create the html elements to add to div.dirlist
        let dlist = document.createElement("section");
        let logo = document.createElement("img");
        let cinfo = document.createElement("div");
        let company = document.createElement("h3");
        let contact = document.createElement("div");

        // Set the image attributes
        logo.setAttribute("src", item.icon);
        logo.setAttribute("alt", `Logo of ${item.name}`);
        logo.setAttribute("loading", "lazy");

        // Set attribute of cinfo div
        cinfo.setAttribute("class", "cinfo");

        // Set the h3 header and address
        company.textContent = item.name;
        contact.innerHTML = `<p>${item.address}<br>${item.phone}<br><a href="${item.website}">${item.website}</a></p>`;

        // Append name and address to division cinfo
        cinfo.appendChild(company);
        cinfo.appendChild(contact);
        
        // Append elements to section
        dlist.appendChild(logo);
        dlist.appendChild(cinfo);
        // dlist.appendChild(company);
        // dlist.appendChild(contact);

        // Append section to div
        dirList.appendChild(dlist);
    });
}