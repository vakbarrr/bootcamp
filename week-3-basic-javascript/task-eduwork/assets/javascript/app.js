fullName = prompt("Masukkan Namamu : ")
confirm(`Hai, ${fullName}`)

examValue = prompt("Masukkan Nilaimu: ")
if(examValue > 80){
 examValue = "Kamu lulus"
}else if(examValue > 60){
  examValue = "Nilai kamu kurang"
}else{
  examValue = "Kamu tidak lulus"
}

alert(`Hai ${fullName}, ${examValue}`)
