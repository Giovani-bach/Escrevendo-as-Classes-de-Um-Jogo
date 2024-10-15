class heroi:
    def __init__(self, nome, idade, classe ):
        self.nome = nome
        self.idade = idade
        self.classe = classe 

    def definir_classe (self):
        self.classe = input("Digite qual a sua classe: ")
    
    def atacar (self):
        if self.classe.lower() == "mago":
            print(f"O {self.classe} atacou usando um cajado")
        elif self.classe.lower() == "guerreiro":
            print(f"O {self.classe} atacou usando uma espada")
        elif self.classe.lower() == "monge":
            print(f"O {self.classe} atacou usando arte marciais")
        elif self.classe.lower() == "ninja":
            print(f"O {self.classe} atacou usando uma shurikem")
        else :
            print("Essa classe nao existe")
            

heroi = heroi("jose", 19, "mago")

heroi.definir_classe()
heroi.atacar()
