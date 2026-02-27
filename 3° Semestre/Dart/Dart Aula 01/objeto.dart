class Animal{
    //Atributos
    Int id:
    String none='';
    String especie='';
    String raca='';
    double peso=0.0;
    //metodos
    String tudojunto(){
        return "$id, $none, $especie, $raca, $peso";
    }
}

void main(){
    //Instancia
    Animal boi;
    //Objeto
    boi = new Animal();
    print(boi);

    boi.id = 1;
    boi.nome = "Bandido";
    boi.especie = "Bovino";
    boi.raca = "Nelori";
    boi.peso = 499.9;

    print(boi.tudojunto());
}