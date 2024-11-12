async function fetchData() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        if (!Array.isArray(data)) {
            console.error("Unexpected data format:", data);
            return;
        }

        let ul = document.getElementById("list");
        ul.innerHTML = "";

        data.forEach((element) => {
            let a = document.createElement("a");
            a.textContent = element.login;
            a.setAttribute("href", element.html_url);
            a.setAttribute("target", "_blank");

            let li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
