//attached with envbot.html file
let gamearea = document.querySelector(".workspace");
let box = document.querySelector(".container");
let question = document.getElementById("command");
let set=[0,0,0,0];
let list={main:'4'};
function send(){
    let s = 1;
    var user = document.getElementById("command").value;
    user=replaceStr(user);
    if((user==null)||(user=='')){
        alert("Write somthing...");
    }else if(set[0]==0){
        set[0]+=1;
        gamearea.innerHTML=" ";
        let x = window.matchMedia("(max-width: 900px)");
        ratio(x);
        x.addListener(ratio);
        send();
    }else{
        chrono();
        selftalk(0,user);
        if(s==1 && set[2]==0){
            document.getElementById("command").value='';
            setTimeout(function reply(){
                talk(user);
            },2000);
        }else if(set[2]==1){
        	document.getElementById("command").value='';
            setTimeout(function reply(){
        	    envCheck(set[4],user);
             },2000);
        }else{
            alert("Error!");
        }
    }  
}
function ratio(x){
    if(x.matches){
        box.style.height+='520px';
        gamearea.style.height+='400px';
    }else{
        box.style.height+='520px';
        gamearea.style.height+='380px';
    }
}
var database1={
    "Ahoy hoy":"Greetings bro.",
    "Hi":"Hello",
    "Hello":"Hlw",
    "Hlw":"Hi",
    "Nice to meet you":"That's my pleasure bro.",
    "What is your name":"Hello , My name is Envbot, I am a environment chatbot by white lotus",
    "Who are you":"I am Envbot",
    "What is white lotus":"White lotus is name of a group , where 4 memebers are present, fire, water, earth and air...",
    "Who is the member of white lotus": "4 members are Souvik Kar, Rajanya Chokrobarti, Hritick Modak, Krishnendu Mitra",
    "What is earth":"Earth is 3rd planet of sun and home of living beings",
    "What is sun":"Sun is a start of Milky way galaxy and home Star of humans",
    "Sorry bro, I did not understand it!":"Don't try to copy my dialogue , little human",
    "Don't try to copy my dialogue , little human":"Don't try to copy my dialogue , little human",
    "Wap in c to display hello world":"#include < stdio.h ><br>int main(){<br><t>printf('Hello world');</t><br>return 0;<br>}",
    "How to know the weather report of my city":"<img src='./img/Cover.png'alt='loading'class='poster'><br>Visit our official weather website to get your city/state/country 's weather information<br> <a class='aurl'href='https://whitelotus4.github.io/weatherbyWHITELOTUS.github.io/'>https://whitelotus4.githu<br>b.io/weatherbyWHITELOTUS<br>.github.io/</a>",
    "How to change your theme":"Click headerber→Scroll down→Click themes option→Change theme",
    "How to change your themes":"Click headerber→Scroll down→Click themes option→Change theme",
    "Change your theme":"Click headerber→Scroll down→Click themes option→Change theme",
    "Change theme":"Click headerber→Scroll down→Click themes option→Change theme",
    "Change themes":"Click headerber→Scroll down→Click themes option→Change theme",
    "Give me the contact number of white lotus":"info.WhiteLotus24@gma<br>il.com",
    "Give me the contact no of white lotus":"info.WhiteLotus24@gma<br>il.com",
    "Contact number of white lotus":"info.WhiteLotus24@gma<br>il.com",
    "Contact no of white lotus":"info.WhiteLotus24@gma<br>il.com",
    "How are you":"I am a robot bro, I am always good",
    "Write a paragraph":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut recusandae cupiditate ut ullam natus adipisci consequuntur sunt ducimus reiciendis nisi, veritatis explicabo ratione soluta. Eius aut vel excepturi, debitis vitae officiis.",
    "How to pass a exam":"Only reading is the final way to pass any exam with excellent marks.., but you are a lazy human bro, so try to use chatGPT or any type of cheets..",
    "How to propose a girl":"Only the girl says how to propose her, so at first married her then ask her which way she want to propose her anyone..",
    "How to propose a boy":"Just go and say this clearly to him, because boy's heart is very clear they only understand the clear signals",
    "How to hack makaut":"Haa Haa Haa , nice joke bro..",
    "Write a c program to implement prime's algorithm":"<img src='/storage/emulated/0/Pictures/Screenshots/Screenshot_2023_0502_152830.png'alt='loading'class='poster'><br>For prime's algorithm check out the following link<br><a class='aurl' href='https://github.com/Krishnendu-Mitra/C-codes.git'>https://github.com/Krishn<br>endu-Mitra/C-codes.git</a> ",
    "Slap you":"Thanks bro..",
    "How to make a AI like you":"Search it in google , 'how to hack google', your answer is very clear",
    "I want to marry you":"I am a robot not any leaving body",
    "l like you":"l subscribe you",
    "I love you":"I love you 3000 bro..",
    "I hate you":"That's your pleasure bro",
    "Write a sort note":"Really bro..",
    "Yes":"Argument is not applicable in your last commite",
    "No":"Argument is not applicable in last message",
    "Thanks":"Try to say 'Thank you' not thanks, it a bad manners bro..",
    "Thank you":"Welcome bro",
    "Bye":"Be with you every time bro..",
};
var database2 = [
    "What is the temperature of my city",
    "How much temperature in my city",
    "What is the airpressure of my city",
    "How much airpressure in my city",
    "io"
];
function talk(user){
    chrono();
    document.getElementById("noti").play();
    let javchat = document.createElement('div');
    javchat.setAttribute('class','javchat');
    if(user in database1){
        javchat.innerHTML=database1[user]+'<br>';
    }else{
    	for(let j=0; j<database2.length; j++){
    	    if(database2[j]==user){
    	        let ans=envCheck(j,database2[j]);
                javchat.innerHTML=ans;
                set[1] = 1;
            }
        }
    	if(set[1]!=1){
            javchat.innerHTML = "Sorry bro, I did not understand it!<br>";
            set[1]=0;
        }
    }
    gamearea.appendChild(javchat);
}
function envCheck(k,d){
	set[4]=k;
	if((k==0||k==1)&&set[2]==0){
		set[2]=1;
		return `Enter your city name`;
	}else if((k==0||k==1)&&set[2]==1){
		set[2]=0;
		chrono();
		selftalk(1,`Your searching area is ${d}`);
		envSearch(d,'temp');
    }else if((k==2||k==3)&&set[2]==0){
		set[2]=1;
		return `Enter your city name`;
	}else if((k==2||k==3)&&set[2]==1){
		set[2]=0;
		chrono();
		selftalk(1,`Your searching area is ${d}`);
		envSearch(d,'pressure');
    }else{
		return `<r>Error!</r>`;
	}
}
function chrono(){
	const zone = new Date();
    let time = zone.toLocaleTimeString();
    let timechat = document.createElement('div');
    timechat.setAttribute('class','timechat');
    timechat.textContent=time;
    gamearea.appendChild(timechat);
}
function selftalk(e,comment){
	if(e==0){
		document.getElementById("popup").play();
        let userchat = document.createElement('div');
        userchat.setAttribute('class','mychat');
        userchat.textContent=comment;
        gamearea.appendChild(userchat);
	}else{
		document.getElementById("noti").play();
        let javchat = document.createElement('div');
        javchat.setAttribute('class','javchat');
        javchat.innerHTML=comment;
        gamearea.appendChild(javchat);
	}
}
function convertion(val){
    return (val - 273).toFixed(2)
}
function unixConverter(time){
	const unixTimestamp = time;
    const date = new Date(unixTimestamp * 1000);
    const enUS = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return enUS;
}
function envSearch(cityname,line){
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=3045dd712ffe6e702e3245525ac7fa38')
  .then(res => res.json())
  .then(data => 
  {
    var nameval = data['name'];
    var iconcode = data['weather'][0]['icon'];
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    fillup(data,line);
  })
  .catch(err => selftalk(1,'You entered Wrong city name or maybe your net is slow!'))
}
function fillup(data,line){
	if(line=='temp'){
		/*var iconcode = data['weather'][0]['icon'];
		var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
		selftalk(1,`<img class='wicon' src='${iconurl}' alt='icon'><br><te> ${convertion(data['main']['temp'])} °C </te>`);*/
		selftalk(1,`<center><te><r><i class='fa fa-thermometer-half'></i></r> ${convertion(data['main']['temp'])} °C </te></center>`);
	}else if(line=='pressure'){
		selftalk(1,`<center><te><r><i class='fa fa-leaf'></i></r> ${data['main']['pressure']} mb</te></center>`);
    }else{
		selftalk(1,`Which data you want bro, give clearly..`);
	}
}
function replaceStr(user){
	user=user.replace('?','');
	user=user.replace('.','');
	user=user.replace(',','');
	return user;
}