const fio = document.getElementById("fio") as HTMLInputElement;
const address = document.getElementById("adres") as HTMLInputElement;
const snilsElement = document.getElementById("snils") as HTMLInputElement

fio.onkeyup = () => {
  let fioVale = fio.value;
  console.log(fio);
  const regfio = /^(?=.{1,40}$)[А-Я]{1}[а-я]+ [А-Я]{1}[а-я]+ [А-Я]{1}[а-я]+/;
  if (!regfio.test(fioVale)){
    fio.style.borderColor = "red";
  }
  else{
    fio.style.borderColor = "green";
  }
  checkbutton();
};

address.onkeyup = () => {
  let addressValue = address.value;
  console.log(addressValue);
  const addressRegex = /^г\.[А-Я]{1}[а-я]+,? ?ул\.[А-Я]{1}[а-я]+,? ?кв\.[1-9]{1,3}/;
  if (!addressRegex.test(addressValue)){
    address.style.borderColor = 'red'
  }else{
    address.style.borderColor = 'green'
  }
  checkbutton();
};

tel.onkeyup = () => {
  let tel = document.getElementById("tel").value;
  console.log(tel);
  const regtel =
    /^\+?[7-8] ?[0-9]{2}\-?[0-9]{1}\-?[0-9]\-?[0-9]{2}\-[0-9]{2}\-?[0-9]{2}/;
  if (!regtel.test(tel))
    document.getElementById("tel").style.borderColor = "red";
  else document.getElementById("tel").style.borderColor = "green";
  checkbutton();
};

mail.onkeyup = () => {
  let mail = document.getElementById("mail").value;
  console.log(mail);
  const regmail = /^[a-z0-9]{3,}\@[a-z]+\.[a-z]+$/;
  if (!regmail.test(mail))
    document.getElementById("mail").style.borderColor = "red";
  else document.getElementById("mail").style.borderColor = "green";
  checkbutton();
};

kol.onkeyup = () => {
  let kol = document.getElementById("kol").value;
  console.log(kol);
  let c = Number.parseFloat(kol);
  console.log(c);
  if (!(c % 1 == 0)) document.getElementById("kol").style.borderColor = "red";
  else document.getElementById("kol").style.borderColor = "green";
  checkbutton();
};

snilsElement.onkeyup = () => {
  // 127-012-3123
  let snils = snilsElement.value;

  // a = ['127, '012', '3123']
  let a = snils.split(/[- ]/);
  let snilsRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}[ ][0-9]{2}$/;

  let concatedString = a[0] + a[1] + a[2];
  let parsedSnils = parseInt(concatedString)

  if (parsedSnils >= 1001998 && snilsRegex.test(snils)) {
    let sum =
      snils[0] * 9 +
      snils[1] * 8 +
      snils[2] * 7 +
      snils[4] * 6 +
      snils[5] * 5 +
      snils[6] * 4 +
      snils[8] * 3 +
      snils[9] * 2 +
      snils[10] * 1;

    let k4 = parseInt(snils[12] + snils[13]);
    console.log(k4);
    if (sum < 100 && sum == k4) {
      document.getElementById("snils").style.borderColor = "green";
    } else if (sum == 100 || (sum == 101 && k4 == 0))
      document.getElementById("snils").style.borderColor = "green";
    else if (sum > 101 && sum % 101 == k4)
      document.getElementById("snils").style.borderColor = "green";
    else document.getElementById("snils").style.borderColor = "red";
  } else document.getElementById("snils").style.borderColor = "red";
};

function checkbutton() {
  if (
    document.getElementById("fio").style.borderColor == "green" &&
    document.getElementById("adres").style.borderColor == "green" &&
    document.getElementById("tel").style.borderColor == "green" &&
    document.getElementById("mail").style.borderColor == "green" &&
    document.getElementById("kol").style.borderColor == "green" &&
    document.getElementById("snils").style.borderColor == "green"
  )
    document.querySelector(".sub").style.display = "block";
}

// a1 = "Привет, мир мми мир мимо казалось,, пока что мимозыря"
// a1 = a1.replace(/[,]/g, "")
// a1 = a1.split(" ")
// console.log(a1)
// a2 = []
// a2 = a1.filter( x =>
// x[1].toUpperCase()
// )
// console.log(a2)
// n=4
// a3 = []
// for (let i=0;i<n;i++)
// {
//   // a3[i] = Math.round(Math.random()*10+50)
//   a3[i] = prompt("Введите число","Число")
//   // alert("ssss")
// }

// console.log(a3)
