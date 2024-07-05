const button = document.getElementById("closeTab");
        button.addEventListener("click", (e) => {
            e.preventDefault();
            window.close();
        });