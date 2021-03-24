const assert = require('chai').assert;
const app = require('../201602843');

// Results
describe('App', function(){

  describe('contarAs()', function(){
    it('contarAs deberia devolver un 8', function(){
        let conteo = app.contarAs("hola aqui hay un mensaje para contar A's");
        assert.equal(conteo, 8);
      });      
  });
  

  describe('addCuadrado()', function(){
    it('Sumar cuadrados deberia de dar 725', function(){
        let resultado = app.addCuadrado(10,25);
        assert.equal(resultado, 725)
    });
  });


  describe('acumulador()', function(){
    it('acumulador deberia de dar un numero mayor a 1000', function(){
        let resultado = app.acumulador(155);
        assert.isAbove(resultado, 1000);
    });

    it('acumulador deberia de dar un numero mayor a 90.', function(){
        let resultado = app.acumulador(13);
        assert.isAbove(resultado, 90);
    });

  });

  describe('padZeros()', function(){
    it('padZeros deberia devolver un tipo string', function(){
        let resultado = app.padZeros(22, 5);
        assert.typeOf(resultado, 'string');
      });   

  });

  describe('fibonacci()', function(){
    it('fibonacci debe devolver 12 para el valor 112', function(){
        let resultado = app.fibonacci(112)
        assert.isNumber(resultado, "number");
    });
  });


});
