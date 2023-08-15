const product = [
  {
    id: 1,
    head: "God Particle",
    twoline: "The god particle is also known as Higgs Bosons the name of this particle is given on the name of two great scientist Peter Higgs and Satyendra Nath Bose.",
    img1: "./pic/God_particle001.png",
    img2: "./pic/God_particle002.png",
    img3: "./pic/God_particle003.png",
    link: "https://drive.google.com/uc?id=1ZZDoGhI-3M-xjzhOOnrZzV6zggYBtTCE&export=download",
    avglist: [0,0,1,2,0,10,15],
    aboutlist: ["pdf", 16, "900kb", "All type", "English", 0, "No", "No", "Yes"],
    ytlink: "https://www.youtube.com/embed/M63IdwIymiY?controls=0",
    morepro: [],
    text:
      `The god particle is also known as Higgs Bosons the name of this particle is given on the name 
        of two great scientist Peter Higgs  and Satyendra Nath Bose. It is discovered by peter higgs 
        and his team of 7000 scientists approximately forms more than 40  counters on 4th July 2012. 
        It is discovered by using LHC which is placed between two countries France-Switzerland a 
        border near Geneva, Switzerland. It is named as God particle because it gives mass to every 
        particle of our universe. Peter Higgs is one of six researchers who gave the theory about 
        existence of this particle in 1964. It takes a long time about 48 years to discover this particle 
        after the peter gives the theory. <br>
        In this pdf we descuse about basic knowledge of God particle and history of God particle, not
        only that but also we are give a mathematical proofs of existence of God particle and virtual
        experiment of profe god particle using real experiment data. `
  },
  {
    id: 2,
    head: "Astronomy for India",
    twoline: "Astronomy is a easy subject but not in india",
    img1: "./pic/Astronomy_forIndia001.png",
    img2: "./pic/Astronomy_forIndia002.png",
    img3: "./pic/Astronomy_forIndia003.png",
    link: "https://youtube.com/",
    avglist: [0,0,2,0,0,0,5],
    aboutlist: ["ppt", 8, "2.3Mb", "Students", "English", 0, "No", "Yes", "Yes"],
    ytlink: "https://www.youtube.com/embed/?controls=0",
    morepro: [["./pic/Astronomy_part1.png", "Astronomy part 1", "https://drive.google.com/uc?export=download&id=1jyBoxo0bWzmdgK-r0PJVRdF3iq35bxt7","4.1Mb","ppt","Presentation ppt","15/05/2023"],
                      ["./pic/Astronomy_part2.png", "Astronomy part 2", "https://drive.google.com/uc?export=download&id=1l2qnKW4VdUpcxO3XK0HWr7TmJomBHklb","4.1Mb","ppt","Presentation ppt","15/05/2023"]
],
    text:
      `Astronomy subject is very popular to students and most seriously in girls but in india that's knowledge is not publick , common people is not any idea about it but in past of India, no better then a Indian
      in terms of astronomy knowledge and applications in real life. So we are try to provide the basic knowledge about astronomy, this doc is available for all indians not only Indians but also south Asian countries
      and other countries also. This document divided in many parts each and every parts and required ppt /pdf are provided here , more information comes in future.`
  }
];
let milimeter = product.length;
//use pswl id to access productTuple element
let productTuple=[];
if(milimeter % 10 == 0){
  var divisor = milimeter / 10,num1=0;
  for(let i=0; i<divisor; i++){
    num2 = num1+9;
    productTuple[i] = {start: num1, end: num2};
    num1=num2+1;
  }
}else{
	var divisor = Math.floor(milimeter / 10), reminder = milimeter % 10;
	for(let i=0; i<divisor; i++){
    num2 = num1+9;
    productTuple[i] = {start: num1, end: num2};
    num1=num2+1;
  }
  if(productTuple[productTuple.length-1]!=undefined){
    productTuple[productTuple.length] = {start: productTuple[productTuple.length-1]+1, end: reminder};
  }else{
    productTuple[productTuple.length] = {start: 0, end: reminder};
  }
}
function rateChecker(arr){
  let T=0,M=0;
  for(let i=2; i<7; i++){
    T+=arr[i];
  }
  for(let i=2; i<7; i++){
    M+=(arr[i]*(i-1));
  }
  arr[1]=T;
  arr[0]=(M/T).toFixed(1);
  return arr;
}
function rateToStarMaker(arr){
  let num=arr*10, counter, newnum, j,p=0.1;
  if(num % 10 != 0){
    num = ((num/10).toFixed(1))*1;
      for(j=1; j<10; j++){
        newnum = num+p;
        if((newnum*10) % 10 == 0){
          counter=p;
          num=Math.floor(num);
          break;
        }
        p+=0.1;
      }
  }else{
    counter=1;
    num = ((num/10).toFixed(1))*1;
  }
  num=num*1;
  counter=((1-counter.toFixed(1)*1).toFixed(1)*1);
  p='';
  for(j=0; j<num; j++){
    p+=`<i class="fa fa-star checked"></i>`;
  }
  if(counter<=0.3 && counter>0){
    p+=`<i class="fa fa-star-o checked"></i>`;
    newnum=1;
  }else if(counter<=0.9 && counter>0.3){
    p+=`<i class="fa fa-star-half-o checked"></i>`;
    newnum=1;
  }else{
    p+='';
    newnum=0;
  }
  for(j=0; j<(5-(num+newnum)); j++){
    p+=`<i class="fa fa-star"></i>`;
  }
  return p;
}
