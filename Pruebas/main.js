function checkSize(pathFile){

  let size = 0;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", pathFile, true);


  xhr.onreadystatechange = function(){

    if(this.status === 200, this.readyState === 4){

      size = Number(this.getResponseHeader("Content-Length")/1024/1024);
      console.log(Number(this.getResponseHeader("Content-Length")/1024/1024).toFixed(2));

      if(size <= 2){

        console.log(size, "Ok");

      }
      else{
        console.log(size, "Sorry");
      }
      
    }

  }

  xhr.send();


}

checkSize("http://www.bcv.org")