module.exports = {
    contarAs: function (text) {
        let c = 0;
        for (const iterator of text) {
            if(iterator === "a" || iterator === "A" )
                c++;
        }
        return c;
    },
    addCuadrado: function (a,b) {
        function cuadrado(x) {
        return x * x;
        }
        return cuadrado(a) + cuadrado(b);
    },
    acumulador: function (numero) {
        let c = 0;
        for(let i = 0; i <= numero ; i++)
            c += i;
        return c;
    },
    padZeros: function (num, totalLen) {
        var numStr = num.toString();             
        var numZeros = totalLen - numStr.length; 
        for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
        }
        return numStr;
    },
    fibonacci: function (num){
        var a = 1, b = 0, temp;
      
        while (num >= 0){
          temp = a;
          a = a + b;
          b = temp;
          num--;
        }
        return b;
      }
}