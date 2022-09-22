
export class Animal {
    nomeBicho: string;
    idadeBicho: number;
    somEmitido: string;
    corre: string;

        constructor(nomeBicho: string, idadeBicho: number, somEmitido: string, corre: string) {
            this.nomeBicho = nomeBicho;
            this.idadeBicho = idadeBicho;
            this.somEmitido = somEmitido;
            this.corre = corre;
    }

        mostrarResuldado() {
            console.log(`O nome do bicho é ${this.nomeBicho}\nTem ${this.idadeBicho} anos\nEste animal costuma ${this.somEmitido}.\nEle gosta de ${this.corre}`)
        }
}