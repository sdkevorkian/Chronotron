var currentCategory = gon.choice;
var buttons;
var otherCategories;

function otherCatgoriesAvailable(currentCategory) {
    var otherCategories = [];
    switch (currentCategory) {
        case "videos":
            otherCategories = ["trivia", "music", "trails"];
            break;
        case "trivia":
            otherCategories = ["videos", "music", "trails"];
            break;
        case "music":
            otherCategories = ["videos", "trivia", "trails"];
            break;
        case "trails":
            otherCategories = ["videos", "trivia", "music"];
            break;
    }
    return otherCategories;
}

function displayCategoryForms(category) {
    $(`#${category}`).show();
    $(`#${category}`).siblings().hide();
}


function toggleCategory() {
    currentCategory = this.innerText;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText === currentCategory) {
            displayCategoryForms(currentCategory);
        }
    }
    changeButtonText(currentCategory);
}

function changeButtonText() {
    otherCategories = otherCatgoriesAvailable(currentCategory);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerText = otherCategories[i];
    }
}

$(document).ready(function() {
    otherCategories = otherCatgoriesAvailable(currentCategory);

    buttons = $('.choice-buttons');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerText = otherCategories[i];
    }
    displayCategoryForms(currentCategory);

    buttons.on("click", toggleCategory);

});
