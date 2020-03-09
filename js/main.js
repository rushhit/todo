const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
let LIST, id;

var main = {

    login: function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Kafein" && password === "Kafein") {
            alert("Giriş Başarılı");
            window.location = "todolist.html";
            localStorage.setItem("username", username);
            localStorage.setItem("logged", true);
        } else {
            alert("Kullanıcı adı yada Şifre yanlış");
            localStorage.removeItem("username");
            localStorage.removeItem("logged");
            window.location = "index.html";
        }
    },

    loadList: function(array) {
        array.forEach(function(item) {
            main.addToDo(item.name, item.id, item.done, item.trash);
        });
    },


    addToDo: function(toDo, id, done, trash) {

        if (trash) { return; }

        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";

        const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

        const position = "beforeend";

        list.insertAdjacentHTML(position, item);
    },


    completeToDo: function(element) {
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

        LIST[element.id].done = LIST[element.id].done ? false : true;
    },

    removeToDo: function(element) {
        element.parentNode.parentNode.removeChild(element.parentNode);

        LIST[element.id].trash = true;
    },

    loadEvents: function() {


        // todo
        const clear = document.querySelector(".clear");
        const dateElement = document.getElementById("date");
        const list = document.getElementById("list");






        let data = localStorage.getItem("TODO");



        if (data) {
            LIST = JSON.parse(data);
            id = LIST.length;
            main.loadList(LIST);
        } else {
            LIST = [];
            id = 0;
        }


        if (clear) {
            clear.addEventListener("click", function() {
                const username = localStorage.getItem("username");
                localStorage.clear();
                location.reload();
                // Avoid clear the username
                localStorage.setItem("username", username);
            });
        }

        if (dateElement) {
            const options = { weekday: "long", month: "short", day: "numeric" };
            const today = new Date();

            dateElement.innerHTML = today.toLocaleDateString("tr-TR", options);
        }


        document.addEventListener("keyup", function(even) {

            if (event.keyCode == 13) {

                // if we are on the login page
                if (document.getElementById("username")) {
                    main.login();
                    return false;
                }

                const input = document.getElementById("input");
                const toDo = input.value;

                if (toDo) {
                    main.addToDo(toDo, id, false, false);

                    LIST.push({
                        name: toDo,
                        id: id,
                        done: false,
                        trash: false
                    });

                    localStorage.setItem("TODO", JSON.stringify(LIST));

                    id++;
                }
                input.value = "";
            }
        });



        if (list) {
            list.addEventListener("click", function(event) {
                const element = event.target;
                const elementJob = element.attributes.job.value;

                if (elementJob == "complete") {
                    main.completeToDo(element);
                } else if (elementJob == "delete") {
                    main.removeToDo(element);
                }

                localStorage.setItem("TODO", JSON.stringify(LIST));
            });
        }


    },

    setUsername: function() {
        document.getElementById("username").innerHTML = localStorage.getItem("username") || "";
    }



};


window.onload = function() {

    main.loadEvents();
    main.setUsername();

};