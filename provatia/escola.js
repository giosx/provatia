export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    answer: "Quem fundou a escola foi XYZXAS"
}

export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

export const palavrasPerguntaNadaHaver = {
    probablyWords: [
        "qual", "time", "jogou", "ontem", "futebol", "bola",
        "árbitro", "gol", "goleiro", "jogador", "chuteira", "camisas", "teve",
        "com", "que", "o", "quais", "foram", "usadas", "no", "jogo", "de"
    ],
    matched: 0,
    answer: "Não sei responder sobre isso"
}

function showAnswer(index) {
        switch (index) {
            case 0:
                return "Sabe me dizer quem foi que criou a escola?"
            case 1:
                return "Quem foi o criador da escola?"
            case 2:
                return "Quem criou a escola?"
            case 3:
                return "Sabem me dizer quem criou a instituição?"
            case 4:
                return "Quem fundou a instituição"
            case 5:
                return "Qual o nome do fundador da instituição? Quem era ele?"
            default:
                return "Não entendi a pergunta"
            }
        return "Quem fundou a escola foi XYZXAS"
    }
    

function showAnswer(index) {
        switch (index) {
            case 0:
                return "Qual curso tecnico a escola oferece?"
            case 1:
                return "Sabe me dizer qual são os cursos que a intituição oferece?"
            case 2:
                return "Quais cursos técnicos a instituição oferece?"
            case 3:
                return "Qual a área técnica disponivel?"
            case 4:
                return "A escola oferece curso técnico? Quais?"
            default:
                return "Não entendi a pergunta"
            }
        return "Oferecemos os cursos técnicos XYZXAADJASD"
        }


function showAnswer(index) {
        switch (index) {
            case 0:
                return "Sabe me dizer como fazer a matrícula?"
            case 1:
                return "Sabe me dizer como fazer a rematrícula?"
            case 2:
                return "Quais são os documentos necessários para a matrícula?"
            case 3:
                return "Como matricular um filho ou uma filha?"
            case 4:
                return "Como rematricular um filho ou uma filha?"
            case 5:
                return "Onde entro em contato pra matricula ou rematricula?"
            default:  
                return "Não entendi a pergunta"
            }
        return "Para matricular Deve ser feito XYZ, e para matricular ABC"
    }
    


function showAnswer(index) {
        switch (index) {
            case 0:
                return "Qual time jogou ontem?"
            case 1:
                return "Teve futebol ontem?"
            case 2:
                return "Qual jogador jogou ontem?"
            case 3:
                return "Com que chuteira que o goleiro jogou ontem?"
            case 4:
                return "Quais camisas foram usadas no jogo?"
            default:
                return "Não quer perguntar sobre a escola?"
            }
        return "Pergunte sobre a escola"
    }
    

        
export function mostProbablyQuestion() {
    if (pergunta.includes("futebol")) {
        return "não falo sobre futebol"
    }
    let matches = [
        palavrasCursosTecnicos.matched, 
        palavrasEscolaFundador.matched, 
        palavrasMatricula.matched,
        palavrasPerguntaNadaHaver.matched, 
    ]
    console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))
    return showAnswer(matches.indexOf(Math.max(...matches)))
}
