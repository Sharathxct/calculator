console.log("hello")

function sum() {
  console.log("sum called")
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  // console.log(a, b)
  let p = document.getElementById("p");
  console.log(p)

  fetch("http://localhost:3000/sum", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ a, b })
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data.data);
    p.innerHTML = " " + data.data;
  })
}
