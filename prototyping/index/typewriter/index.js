document.addEventListener("DOMContentLoaded", function() {
    const helloWorld = "HELLO, WORLD.";
    const nathanBusse = "I'm Nathan Busse.";

    let i = 0, j = 0;

    function typeWriterHelloWorld() {
        if (i < helloWorld.length) {
            document.getElementById("hello-world").innerHTML += helloWorld.charAt(i);
            i++;
            setTimeout(typeWriterHelloWorld, 200);
        }
    }

    function typeWriterNathanBusse() {
        if (j < nathanBusse.length) {
            document.getElementById("nathan-busse").innerHTML += nathanBusse.charAt(j);
            j++;
            setTimeout(typeWriterNathanBusse, 200);
        }
    }

    typeWriterHelloWorld();
    setTimeout(typeWriterNathanBusse, 2000); // Start after "HELLO, WORLD." finishes
});
