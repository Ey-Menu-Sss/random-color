


  let jj = document.querySelector(".random");



function bla() {
    let ran_1 = Math.floor(Math.random() * 250) + 1;
    let ran_2 = Math.floor(Math.random() * 250) + 1;
    let ran_3 = Math.floor(Math.random() * 250) + 1;
    jj.style.backgroundColor = `rgb(${ran_1}, ${ran_2}, ${ran_3})`;
}



