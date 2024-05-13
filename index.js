let btn1 = document.getElementById("Mybutton1");
      let btn2 = document.getElementById("Mybutton2");
      let copydiv = document.querySelector(".copycode");
      let rgb1 = "#D4145A" ;
      let rgb2 = "#FBB03B" ;

      const  hexvalues = () =>{
        let colors = "#" ;
        let myhexvalues = "0123456789abcdef";
        for( let i=0 ; i<6 ; i++ ){      
          // console.log(myhexvalues[Math.floor(Math.random()*16)]);
          colors = colors + myhexvalues[Math.floor(Math.random()*16)];
        }
         return colors;
      }
      
      const handlebutton1 = () => {
        rgb1 = hexvalues();
        console.log(rgb1); 
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copydiv.innerHTML = `background-image: (linear-gradient(to right, ${rgb1},${rgb2})`;
        btn1.innerHTML = rgb1 ;
      };
      
      const handlebutton2 = () => {
        rgb2 = hexvalues();
        console.log(rgb2);
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copydiv.innerHTML = `background-image: (linear-gradient(to right, ${rgb1},${rgb2})`;
        btn2.innerHTML = rgb2 ;
      }
      copydiv.addEventListener("click",() => {
        navigator.clipboard.writeText(copydiv.innerHTML);
        alert("copied");
      })

      btn1.addEventListener('click',handlebutton1);
      btn2.addEventListener('click',handlebutton2);