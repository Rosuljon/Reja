console.log("browser.js loaded");
const createField = document.getElementById("create-field");
function itemTemplate(item) {
  return `<li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
          >
            <span class="item-text">${item.reja}</span>
            <div>
              <button
                data_id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"
              >
                Change
              </button>
              <button
                data_id="${item._id}"
                class="delete-me btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>`;
}
document.getElementById("create-form").addEventListener("submit", (event) => {
  event.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("item was not added: " + err);
    });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure you want to delete")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data_id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("item was not deleted:" + err);
        });
    }
  }
  if (e.target.classList.contains("edit-me")) {
    console.log("edit");
  }
});
