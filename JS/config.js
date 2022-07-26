
// botoes e telas iniciais

const btCriarCv = document.querySelector('.bt-criar-cv');
const box_inicial = document.querySelector('.container-inicial');
const box_criacao = document.querySelector('.box-opcoes');
const folha1 = document.querySelector('.container-folha1');
const faixa = document.querySelector('.faixa');

btCriarCv.addEventListener("click", ()=> chamar_criacao());

const chamar_criacao = () =>{

    box_criacao.style.display = "flex";
    box_inicial.style.display = "none";
    folha1.style.display = "flex";   
}


// box contato INICIO
const adName = document.getElementById("add-Nome");
const adSname = document.getElementById("add-sobre-nome");
const adendereco = document.getElementById("add_endereco");
const adcidade = document.getElementById("nameCidade");
const adcep = document.getElementById("adnameCep");
const adTele = document.getElementById("addtelefone");
const adEmail = document.getElementById("addEmail");
const IconEndereco = document.querySelector(".iconEndereco");
const IconEmail = document.getElementById("IconEmail");
const IconTele = document.getElementById("IconTele");
const btNext1 = document.querySelector('.btnext1');
const inputglobal = document.querySelector('.input-global');
const inputM = document.querySelector('.input-maior');

btNext1.addEventListener("click", ()=> AvançarBoxExpe())

const addNome = (InputNome)=>{

    adName.innerHTML = InputNome.value;
}

const addSnomeF = (InputNome) =>{

    adSname.innerHTML = InputNome.value;

}

const addeEndereco = (InputNome) =>{

    adendereco.innerHTML = InputNome.value;
    IconEndereco.style.display = "block";

    if(InputNome.value.length<1){

        IconEndereco.style.display = "none";
    }
}


const addCidade = (Inputcidade) =>{

    adcidade.innerHTML = Inputcidade.value;
}

const addCep = (Inputcidade) =>{

    adcep.innerHTML = Inputcidade.value;

}

const addEmail =(Inputemail) =>{

    adEmail.innerHTML = Inputemail.value;
    IconEmail.style.display = "block";

    if(Inputemail.value.length<1){

        IconEmail.style.display = "none";
    }
}

const addTele = (InputTele) =>{

    adTele.innerHTML = InputTele.value;
    IconTele.style.display = "block";

    if(InputTele.value.length<1){

        IconTele.style.display = "none";
    }

}

const AvançarBoxExpe =() =>{

    if(inputglobal.value == 0 || inputM.value ==0){

        alert("Você precisa preencher ao menos dois campos de informaçâo");
        

    }else if(inputglobal.value.length>1 || inputM.value.length>1){

        box_criacao.style.display = "none";
        box_experiencia.style.display = "flex";

    }
}

// FIM



// inicio box experiencia
const box_experiencia = document.querySelector('.box-experiencia');
const btexpe = document.querySelector('.btavncarFormacao');
const box_erro = document.querySelector('.msg-box_erro');
const addnamecargo = document.querySelector("#addName_cargo");
const addNameEmpre = document.querySelector('#addnameEmpre');
const descri = document.querySelector('#addDescriTex');
const boxExpeBorde = document.querySelector('.add-experiencia-profiss');
const InputsExpe = document.querySelector('.inputExpe');
const btAddExpe = document.querySelector('.addExpe');
const Pularbox = document.querySelector('.Pular');
const BoxFormacao = document.querySelector('.box-formaçao');

const IconCargo = document.querySelector('.iconExpe');
btexpe.addEventListener("click", ()=> Avançar_box_formaçao());
btAddExpe.addEventListener("click", ()=> adExpeF());
Pularbox.addEventListener("click", ()=> NEXTboxF());


const Avançar_box_formaçao = () =>{

    if(InputsExpe.value == 0){

        box_erro.style.display = "block";

    }else if(InputsExpe.value.length>1){

        box_experiencia.style.display = "none";
        BoxFormacao.style.display = "flex";

    }

}

const adExpeF = () =>{

    box_erro.style.display = "none";
}

const NEXTboxF = () =>{

    box_erro.style.display = "none";
    box_experiencia.style.display = "none";
    BoxFormacao.style.display = "flex";

}


const addNameCargo =(InputCargo) =>{

    addnamecargo.innerHTML = InputCargo.value;
    IconCargo.style.display = "block";
    boxExpeBorde.style.display = "block";

    if(InputCargo.value<1){

        IconCargo.style.display = "none";
        boxExpeBorde.style.display = "none";
    }

}
const Descricao = (InputDescr) =>{

    descri.innerHTML = InputDescr.value;

}// FIM box experiencia




// inicio box FORMAÇâO
const btAvancarConhe = document.querySelector('.btavancarConhecimentos');
const box_conhecimetos =  document.querySelector('.box-conhecimentos');
const addEsc = document.querySelector('#addNameEs');
const addTitulos = document.querySelector('#addTitu');
const formacaoBorder = document.querySelector('.formacao-pro');
const inputF = document.querySelector('.InputForm');

btAvancarConhe.addEventListener("click", ()=> Avançar_box_conhecimentos());


const addNamescola =(InputEscola) =>{

    addEsc.innerHTML = InputEscola.value;
    formacaoBorder.style.display = "block";

    if(InputEscola.value<1){

        formacaoBorder.style.display = "none";
    }

}

const addNameCertificado = (InputCerti) =>{

    addTitulos.innerHTML = InputCerti.value;

}

const Avançar_box_conhecimentos = () =>{

    if(inputF.value == 0){

    var avancar =confirm("Avançar? você nâo preencehu os inputs.");

    if (avancar == true){

        BoxFormacao.style.display = "none";
        box_conhecimetos.style.display = "flex";
}
    }else if(inputF.value.length>1){

        BoxFormacao.style.display = "none";
        box_conhecimetos.style.display = "flex";

    }

}// FIM box FORMAÇâO


// INICIO BOX CONHECIMENTO
const btAvncarS = document.querySelector('.btavncarSobre');
const addnameC = document.querySelector('#addNameConhe');
const addNivel = document.querySelector('#addNivel');
const Inputco = document.querySelector('.InputConhe');
const box_sobre = document.querySelector('.box-sobre');
const boxBorder = document.querySelector('.conhe-lis');


const c_leigo = document.querySelector('.leigo');
const c_iniciante = document.querySelector('.iniciante');
const c_medio = document.querySelector('.medio');
const c_experiente = document.querySelector('.experiente');

c_leigo.addEventListener("click", ()=> Nivel_leigo());
c_iniciante.addEventListener("click", ()=> Nivel_iniciante());
c_medio.addEventListener("click", ()=> Nivel_medio());
c_experiente.addEventListener("click", ()=> Nivel_experiente());
btAvncarS.addEventListener("click", ()=> avançar_box_sobre());

const addConhcimento = (InpuConhe) =>{

    boxBorder.style.display = "block"

    addnameC.innerHTML = InpuConhe.value;
    if(InpuConhe.value == 0){

        boxBorder.style.display = "none";
    }
}

const Nivel_leigo =() =>{

    c_leigo.style.backgroundColor = "red";
    addNivel.innerHTML = "Leigo"

    c_iniciante.style.backgroundColor = " rgba(255, 255, 0, 0.385)";
    c_experiente.style.backgroundColor = " rgba(0, 128, 0, 0.362)";
    c_medio.style.backgroundColor = "rgba(21, 66, 21, 0.415)";

}

const Nivel_iniciante = () =>{

    c_iniciante.style.backgroundColor = "yellow";
    addNivel.innerHTML = "Iniciante"

    c_leigo.style.backgroundColor = "rgba(255, 0, 0, 0.326)";
    c_experiente.style.backgroundColor = " rgba(0, 128, 0, 0.362)";
    c_medio.style.backgroundColor = "rgba(21, 66, 21, 0.415)";


}



const Nivel_medio = () =>{

    c_medio.style.backgroundColor = "rgb(5, 64, 5)";
    addNivel.innerHTML = "Medio"

    c_leigo.style.backgroundColor = "rgba(255, 0, 0, 0.326)";
    c_experiente.style.backgroundColor = " rgba(0, 128, 0, 0.362)";
    c_iniciante.style.backgroundColor = "rgba(255, 255, 0, 0.385)";


}









const Nivel_experiente = () =>{

    c_experiente.style.backgroundColor = "green";
    addNivel.innerHTML = "Experiente"

    c_leigo.style.backgroundColor = "rgba(255, 0, 0, 0.326)";
    c_iniciante.style.backgroundColor = "rgba(255, 255, 0, 0.385)";
    c_medio.style.backgroundColor = "rgba(21, 66, 21, 0.415)";
}

const avançar_box_sobre = () =>{

    if(Inputco.value == 0){

        
    var avancar =confirm("Avançar? você nâo preencehu os inputs.");

    if (avancar == true){

        box_conhecimetos.style.display = "none";
        box_sobre.style.display = "flex";
}

    } else if(Inputco.value.length>1){

        box_conhecimetos.style.display = "none";
        box_sobre.style.display = "flex";

    }
} 
// FIM BOX CONHECIMENTO












// INICIO BOX SOBRE
const receberText = document.querySelector('#text-sobre');
const sobrem = document.querySelector('.sobreM');
const btavnC = document.querySelector('.btAvanConcluir');
const box_concluir = document.querySelector('.box-concluir');
const Inputresumo = document.querySelector('.InputResumo');

btavnC.addEventListener("click", ()=> avançar_box_concluir());

const addTextSobre = (InputSobre) =>{

    receberText.innerHTML = InputSobre.value;
    sobrem.style.display = "block";

    if(InputSobre.value<1){

        sobrem.style.display = "none";
    }
}

const avançar_box_concluir = () =>{

    if(Inputresumo.value == 0){

        var avancar =confirm("Avançar? você nâo escreveu o seu resumo.");

        if(avancar == true){
    
            box_sobre.style.display = "none";
            box_concluir.style.display = "flex";
    }

    }else if(Inputresumo.value.length>1){

        box_sobre.style.display = "none";
        box_concluir.style.display = "flex";
    }


}// FIM BOX SOBRE














// INICIO BOX CONCLUIR
const iconG = document.querySelector('.iconGit');
const iconL = document.querySelector('.iconLink');
const iconP = document.querySelector('.iconPor');
const textGit = document.querySelector('#textGit');
const textLink = document.querySelector('#textLink');
const textpo = document.querySelector('#textPort');














const addTextGit =(inputGit) =>{

    textGit.innerHTML = inputGit.value;
    iconG.style.display = "block";

    if(inputGit.value<1){

        iconG.style.display = "none";
    }

}

const addTextLinkdln = (inputLink) =>{

    textLink.innerHTML = inputLink.value;
    iconL.style.display = "block";

    if(inputLink.value<1){

        iconL.style.display = "none";
    }

}

const addTextPortfolio =(InputPo) =>{


    textpo.innerHTML = InputPo.value;
    iconP.style.display = "block";

    if(InputPo.value<1){

        iconP.style.display = "none";
    }

}












const f1 = document.querySelector('#Arial');
const f2 = document.querySelector('#Franklin');
const f3 = document.querySelector('#Impact');
const f4 = document.querySelector('#TimesNewRoman');
const f5 = document.querySelector('#Verdana');
const f6 = document.querySelector('#GillSans');
const f7 = document.querySelector('#monospace');
const f8 = document.querySelector('#SegoeUI');
const f9 = document.querySelector('#AnekLatin');


f1.addEventListener("click", ()=> FonteAria());
f2.addEventListener("click", ()=>FonteFranklin());
f3.addEventListener("click", ()=> FonteImpact());
f4.addEventListener("click", ()=> Times());
f5.addEventListener("click", ()=> Verdana());
f6.addEventListener("click", ()=> Gil_Sans());
f7.addEventListener("click", ()=> monosPace());
f8.addEventListener("click", ()=> SegoeUIF());
f9.addEventListener("click", ()=> AnekLatin());


const FonteAria = () =>{

    folha1.style.fontFamily = "Arial";
}

const FonteFranklin=() =>{

    folha1.style.fontFamily = "Franklin";

}

const FonteImpact=()=>{

    folha1.style.fontFamily = "Impact";

}


const Times =() =>{

    folha1.style.fontFamily = "Times New Roman";

}


const Verdana = () =>{

    folha1.style.fontFamily = "Verdana";

}


const Gil_Sans = () =>{


    folha1.style.fontFamily = "Gill Sans";
}


const monosPace = () =>{

    folha1.style.fontFamily = "monospace";

}

const SegoeUIF = () =>{

    folha1.style.fontFamily = "Segoe UI";
    
}


const AnekLatin = () =>{

    folha1.style.fontFamily = "Anek Latin";

}


const cor_da_folha = () =>{

    const inputFolha = document.querySelector('.inputColorFolha').value;
    folha1.style.backgroundColor = inputFolha;
}

const cor_da_faixa = () =>{

    const inputFaixa = document.querySelector('.inputColorFaixa').value;
    faixa.style.backgroundColor = inputFaixa;   
}

const cor_letras = () =>{

    const inputLetras = document.querySelector('.inputColorLetras').value;
    folha1.style.color = inputLetras;
    faixa.style.color = inputLetras;
}




















const inputPhoto = document.querySelector('.addPHOTOperfil');
const receberfoto = document.querySelector('.receberFoto');
const box_receberfoto = document.querySelector('.box-foto');
const container_cria = document.querySelector('.container-criacao');

inputPhoto.addEventListener("change", ((even)=>{

    const InputTarget = even.target;
    const file = InputTarget.files[0];

    if(file){

       const reader = new FileReader();

       reader.readAsDataURL(file);

       reader.addEventListener("load", ((event)=>{

        const thisReader = event.target;

        const newImg = document.createElement('img');
        newImg.src = thisReader.result;
        newImg.classList.add('.receberFoto');
        
        receberfoto.innerHTML = "";
        receberfoto.appendChild(newImg);

       }))

    }else{

        receberfoto.innerHTML = pictureImageTxt;

    }
}))














const btSalvarPDF = document.querySelector('.btsalvarcv');
const btEditar = document.querySelector('.btaEditarDenovo');
const voltarC = document.querySelector('#vtc');
const VoltarExpe = document.querySelector('#VtExpe');
const voltarFor = document.querySelector("#vtF");
const voltarConheci = document.querySelector('#vtConheci');










voltarC.addEventListener("click", ()=> VoltarContatos());
VoltarExpe.addEventListener("click", ()=> VoltarExperiencia());
voltarFor.addEventListener("click", ()=> VoltarFormaçâo());
voltarConheci.addEventListener("click", ()=> VoltarConhecimento());
btEditar.addEventListener("click", ()=> voltarSobre());










btSalvarPDF.addEventListener("click", ()=> print());










const print = () =>{

    container_cria.style.display = "none";
    folha1.style.display = "flex";
    folha1.style.marginLeft = "-180px";

    setTimeout(()=>{

        var avancar =confirm("Editar Novamente?.");

        if(avancar == true){
            
            container_cria.style.display = "flex";
            folha1.style.display = "flex";
            folha1.style.marginLeft = "";
    }else{

        setTimeout(()=>{

            location.reload();

        },2000)
    }



    },5000);

    window.print();
}










const VoltarContatos = () =>{

    
    box_experiencia.style.display = "none";
    box_criacao.style.display = "flex";

}











const VoltarExperiencia = () =>{

    BoxFormacao.style.display = "none";
    box_experiencia.style.display = "flex";

}













const VoltarFormaçâo = () =>{

    box_conhecimetos.style.display = "none";
    BoxFormacao.style.display = "flex";

}















const VoltarConhecimento = () =>{

    box_sobre.style.display = "none";
    box_conhecimetos.style.display = "flex";

}












































































































































































































































































































































































































































                  



























































































































































































































































































































































































const voltarSobre = () =>{

    box_concluir.style.display = "none";
    box_sobre.style.display = "flex";
}