$(document).ready(() => {
    // Objective 1.
    let createButton1 = $("<button>1. Nice Message</button>");

    $(document.body).append(
        $("<button>1. Nice Message</button>").click(function () {
            alert("1. Objective 1 now complete!")
        })
    );
    //Objective 2.
    let alertBtn = $('#btnSubmit');
    let textBox = $('#text-field2');

    alertBtn.click(function () {
        alert(textBox.val());
    });

    //Objective 3
    let hoverDiv = $('#hoverME');

    hoverDiv.css({
        height: "320px",
        width: "100px",
        border: "1px solid black"
    });

    hoverDiv.mouseover(function () {
        hoverDiv.css({
            "background-color": "red",
        });
    });

    hoverDiv.mouseout(function () {
        hoverDiv.css({
            "background-color": "hotpink",
        });
    });

    //Objective 4
    let paraRandom = $("<p>This is objective 4.<p>");
    let paraText = $("<p></p>").text("Objective 4444444444444");

    $(document.body).append(paraRandom);
    $(paraRandom).append(paraText); 
    
    paraRandom.click(function() {
        paraRandom.css("color",getRandomColor());
    })



});


// Random color function to go with objective 4.
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};