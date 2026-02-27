class Animal{
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso = 0.0;
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto() {
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main() {
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
    Animal cachorro = new Animal(2, "Theo", "Canino", "Vira-lata", 6.9);
    Animal leao = new Animal(3, "Simba", "Leonino", "Leonidas", 299.9);
    Animal onca = new Animal(4, "Richard", "Felinos", "Pintada", 199.9);
    Animal foca = new Animal(5, "Lucas", "Aquatica", "Fofocas", 99.9);
    Animal pavao= new Animal(6, "Kaique", "Ave", "Passaro", 49.9);
    Animal gato = new Animal(7, "Biscoito", "Felino", "Siames", 4.9);
    Animal aguia = new Animal(8, "Cortina", "Ave", "Passaro", 39.9);
    Animal macaco = new Animal(9, "Sagui", "Banana", "Chimpanze", 19.9);
    Animal tartaruga = new Animal(10, "Donatello", "Terrestre", "Ninja", 29.9);    
    print(boi.tudoJunto());
    print(cachorro.tudoJunto());
    print(leao.tudoJunto());
    print(onca.tudoJunto());
    print(foca.tudoJunto());
    print(pavao.tudoJunto());
    print(gato.tudoJunto());
    print(aguia.tudoJunto());
    print(macaco.tudoJunto());
    print(tartaruga.tudoJunto());
}
