class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    definirClasse() {
        const readline = require('readline-sync');
        this.classe = readline.question('Digite qual a sua classe: ');
    }

    atacar() {
        switch (this.classe.toLowerCase()) {
            case 'mago':
                console.log(`O ${this.classe} atacou usando um cajado`);
                break;
            case 'guerreiro':
                console.log(`O ${this.classe} atacou usando uma espada`);
                break;
            case 'monge':
                console.log(`O ${this.classe} atacou usando artes marciais`);
                break;
            case 'ninja':
                console.log(`O ${this.classe} atacou usando uma shuriken`);
                break;
            default:
                console.log('Essa classe nao existe');
        }
    }
}

let heroi = new Heroi('Jose', 19, 'mago');
heroi.definirClasse();
heroi.atacar();

//Certifique-se de instalar essa biblioteca antes de executar o código:
//Só digitar - npm install readline-sync - no terminal
