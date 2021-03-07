function Toplama() {
  let a = process.argv[2];
  let b = process.argv[3];
  let sonuc = Number(a) + Number(b);
  return sonuc;
}
// terminalden giriş string olarak alınıyor
// string number'e cevrilmiştir
function Cikarma() {
  let a = process.argv[2];
  let b = process.argv[3];
  let sonuc = Number(a) - Number(b);
  return sonuc;
}

function Carpma() {
  let a = process.argv[2];
  let b = process.argv[3];
  let sonuc = Number(a) * Number(b);
  return sonuc;
}

function Bolme() {
  let a = process.argv[2];
  let b = process.argv[3];
  let sonuc = Number(a) / Number(b);
  return sonuc;
}

module.exports = {
  Toplama: Toplama,
  Cikarma: Cikarma,
  Carpma: Carpma,
  Bolme: Bolme,
};
