//1
let sentence1 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let pattern1 = /love/gi;
console.log(sentence1.match(pattern1).length);
//2
let sentence2 = "You cannot end a sentence with because because because is a conjunction";
let pattern2 = /because/gi;
console.log((sentence2.match(pattern2)).length);
//3
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let regEx = /[!@#$%&;]/g;
let cleanSentence3 = sentence3.replace(regEx, "");
let arraySentence3 = cleanSentence3.split(" ");
let mf = 1;
let m = 0;
let item;
for (let i = 0; i<arraySentence3.length; i++){
    for (let j = i; j<arraySentence3.length; j++){
        if (arraySentence3[i] == arraySentence3[j]){
            m++;
        }
        if (mf<m){
            mf=m;
            item = arraySentence3[i];
        }
    }
    m=0;
}
console.log(item + " ( " + mf + "times )");
//4
let sentence4 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let num = sentence4.match(/\d+/g);
let numberArray = num.map(Number);
let total = 0;
for (let number of numberArray) {
    total += number;
}
console.log(total);