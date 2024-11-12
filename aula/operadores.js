/*

   + Adição
   - Subtração
   * Multiplicação
   / Divisão
   ** Exponenciação
   % Módulo
   ++ Incremento
   -- Decremento
*/


let x = 0, y = 1

x = x + y
x += y

x = x - y
x -= y

x *= y
x /= y
x %= y
x **= y

x = x ** y

if (x == y){

}

/* 

  == igualdade
  === valor e tipo iguais
   != dierente
   !== diferente valor ou tipo
   > maior 
   > menor 
   >=  maior ou igual 
   <= menor ou igual 
   ? ternario 
*/

if (1 === '1'){    //  valores iguais tipos diferentes com == seria valido
    console.log('valido')

}else {
    console.log('invalido')
}

1 === '1' ? console.log('válido') : console.log('inválido')

/*

   && "e" logico
   || "ou" logico 
   ! negação 
   
*/

1 === '1'|| 1== '1' ? console.log('válido') : console.log('inválido')