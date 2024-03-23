function aaad(design) {
    var text = "";
    var value = false;
    var aaadContent = "";

    design.split("\n").forEach(function(line) {
        if (line !== "") {
            if (line.startsWith("!")) {
                if (!value) {
                    text += "\n" + line.slice(1) + " {";
                    value = true;
                }
            } else if (line[0] === "_") {
                text += "\n}";
                value = false;
            } else if (value) {
                var parts = line.split(" ");
                text += "\n  " + parts[0] + ":" + parts[1] + ";";
            }
        }
    });
    return text;
}

document.addEventListener("DOMContentLoaded", function() {
    var aaadTags = document.getElementsByTagName('aaad');
    Array.from(aaadTags).forEach(function(aaadTag) {
        var styleContent = aaad(aaadTag.textContent);
        aaadTag.innerHTML = "<style>" + styleContent + "</style>";
    });
});