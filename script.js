let c=0;
let a=0;
let str="";

function append(a){
    str += a;
    console.log("string appended:"  + str);
    document.getElementById("screen").innerText=str;
}

function answer(){
    try {
        if(str == "")
            {

                document.getElementById("screen").innerText="0";
            }
        else{

            let ans = eval(str);
            console.log("ans:" + ans);
            if(ans==undefined){

                document.getElementById("screen").innerText="Shi Expression Likhain";
                str = "";
            }
            else{

                document.getElementById("screen").innerText=ans;
                str = ans;
            }
        }    
        // str="";
    } catch (error) {
        document.getElementById("screen").innerText="Shi Expression Likhain";
        
        str = "";
    }
}
function clearScreen(){
        str = "";
        document.getElementById("screen").innerText="0";
        console.log("screen cleared");
        
}


