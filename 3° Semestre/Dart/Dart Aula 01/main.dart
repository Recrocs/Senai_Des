void main(){
    String texto = "Alô Mundo";
    int numero = 9999999988888888;
    double n = 0.333333333333333333333;
    bool ativo = false;
    var coisa = "Texto"; //Não tipada
    dynamic tudo = "Oi";

    print(texto);
    print(numero);
    print("Real = "+n.toString());//concatenação 
    print(ativo?"Oi":"Tchau");//If ternário
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}