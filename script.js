function check() {
    let userInput = parseInt(document.getElementById("input").value)

    let output = ""

    for ( let i = 0; i < userInput; i++) {
        output = output + " . "
    }

    document.getElementById("output").innerHTML = output;
}

function mathSum() {
    const inpuSum = parseInt(document.getElementById("inputSum").value)

    output = 0

    for (let i = 0; i <= inpuSum; i++) {
        output = output + i
    }

    console.log(output)
}

function generateFibonacci(n) {
    const fibonnaci = parseInt(document.getElementById("fibonnaci").value)
    const result = [0, 1];

    for (let i = 2; i <= fibonnaci; i++) {
      const a = result[(i - 1)];
      const b = result[(i - 2)];
      result.push(a + b);
    }
    console.log(result);
    return result[n];
}

