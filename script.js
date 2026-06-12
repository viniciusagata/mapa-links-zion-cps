// =============================================================
// FORMULÁRIOS POR FAIXA ETÁRIA
// Para alterar um formulário, edite apenas a URL correspondente.
// =============================================================
const formulariosPorFaixa = {
  "Família":  "https://forms.gle/ZaBNupQbfH7UAY8E6",
  "Eklektos": "https://forms.gle/sPjCABfEwrW6XnDZA",
  "Vox":      "https://forms.gle/a5uvvRMddHz3zZrN6",
  "Flow":     "https://forms.gle/yQxM3o1UJGeQJzhx5",
  "Rise":     "https://forms.gle/Cavu6ktSMbqMqfJSA"
};

function getFormularioUrl(faixa) {
  return formulariosPorFaixa[faixa] || "#";
}

// =============================================================
// LINKS PRESENCIAIS
// Cada objeto representa um Link com localização física.
// Para adicionar um novo Link, copie um bloco e edite os campos.
// latitude/longitude: use coordenada aproximada do bairro/região.
// =============================================================
const linksPresenciais = [

  // --- FAMÍLIA ---
  {
    id: "fam-001", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Fazenda Sta. Cândida",
    nomePublico: "Fazenda Sta. Cândida - Rodrigo Buissa e Thalita Buissa",
    lideres: ["Rodrigo Buissa", "Thalita Buissa"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.8779, longitude: -47.0241,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-002", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Centro",
    nomePublico: "Centro - Douglas e Laiz",
    lideres: ["Douglas", "Laiz"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.9064, longitude: -47.0521,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-003", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Piracicaba", regiao: "Piracicaba",
    nomePublico: "Piracicaba - Bruno e Luana",
    lideres: ["Bruno", "Luana"],
    diaSemana: "Terça-feira", horario: "19h30",
    latitude: -22.7061, longitude: -47.6584,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-004", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Chácara Primavera",
    nomePublico: "Chácara Primavera - Jeferson e Ju Cabral",
    lideres: ["Jeferson", "Ju Cabral"],
    diaSemana: "Terça-feira", horario: "19h30",
    latitude: -22.8548, longitude: -47.0515,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-005", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Bosque",
    nomePublico: "Bosque - Felipe e Dani",
    lideres: ["Felipe", "Dani"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.9010, longitude: -47.0650,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-006", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Jd. Auxiliadora",
    nomePublico: "Jd. Auxiliadora - Eduardo e Flávia",
    lideres: ["Eduardo", "Flávia"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.8813, longitude: -47.0598,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-007", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Country Ville",
    nomePublico: "Country Ville - Valdessi Amorim e Maria Helena",
    lideres: ["Valdessi Amorim", "Maria Helena"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -22.8968, longitude: -47.0688,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-008", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Jardim Flamboyant",
    nomePublico: "Jardim Flamboyant - Gabriel e Camila",
    lideres: ["Gabriel", "Camila"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.9065, longitude: -47.1013,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-009", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Jardim Chapadão",
    nomePublico: "Jardim Chapadão - Ives e Milena",
    lideres: ["Ives", "Milena"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.8934, longitude: -47.0855,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-010", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Nova Europa",
    nomePublico: "Nova Europa - Reinaldo Cruz e Lucimara Cruz",
    lideres: ["Reinaldo Cruz", "Lucimara Cruz"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.9437, longitude: -47.0596,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-011", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Indaiatuba", regiao: "Indaiatuba",
    nomePublico: "Indaiatuba - Guilherme e Bruna",
    lideres: ["Guilherme", "Bruna"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -23.0645, longitude: -47.2089,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-012", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Swiss Park",
    nomePublico: "Swiss Park - Thiago Machado e Samantha Ferraz",
    lideres: ["Thiago Machado", "Samantha Ferraz"],
    diaSemana: "Terça-feira", horario: "19h30",
    latitude: -22.9682, longitude: -47.0701,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-013", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Hortolândia", regiao: "Hortolândia",
    nomePublico: "Hortolândia - João Mattos e Ana Mattos",
    lideres: ["João Mattos", "Ana Mattos"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.8621, longitude: -47.2139,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-014", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Chácara Primavera",
    nomePublico: "Chácara Primavera - Wilson Júnior e Elaine Bertin",
    lideres: ["Wilson Júnior", "Elaine Bertin"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.8468, longitude: -47.0530,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-015", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Valinhos", regiao: "Valinhos",
    nomePublico: "Valinhos - Marcelo e Cris",
    lideres: ["Marcelo", "Cris"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -22.9709, longitude: -47.0071,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "fam-016", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    cidade: "Campinas", regiao: "Jardim Chapadão",
    nomePublico: "Jardim Chapadão - Gregory e Patrícia",
    lideres: ["Gregory", "Patrícia"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -22.8839, longitude: -47.0832,
    observacoes: "Localização aproximada por segurança."
  },

  // --- EKLEKTOS ---
  {
    id: "ekk-001", faixa: "Eklektos", faixaDescricao: "30 a 39 anos",
    cidade: "Campinas", regiao: "Chácara da Barra",
    nomePublico: "Chácara da Barra - Jessé e Anna",
    lideres: ["Jessé", "Anna"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.8897, longitude: -47.0435,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "ekk-002", faixa: "Eklektos", faixaDescricao: "30 a 39 anos",
    cidade: "Campinas", regiao: "Chácara da Barra",
    nomePublico: "Chácara da Barra - Dionnatan e Vanessa",
    lideres: ["Dionnatan", "Vanessa"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.8900, longitude: -47.0380,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "ekk-003", faixa: "Eklektos", faixaDescricao: "30 a 39 anos",
    cidade: "Campinas", regiao: "Castelo",
    nomePublico: "Castelo - Whirley e Beatriz",
    lideres: ["Whirley", "Beatriz"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -22.8903, longitude: -47.0765,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "ekk-004", faixa: "Eklektos", faixaDescricao: "30 a 39 anos",
    cidade: "Campinas", regiao: "Campos Elíseos",
    nomePublico: "Campos Elíseos - Weslley e Vanessa",
    lideres: ["Weslley", "Vanessa"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -22.9378, longitude: -47.0990,
    observacoes: "Localização aproximada por segurança."
  },

  // --- VOX ---
  {
    id: "vox-001", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Chácara da Barra",
    nomePublico: "Chácara da Barra - Vini Dugolim e Duda Miranda",
    lideres: ["Vini Dugolim", "Duda Miranda"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.8892, longitude: -47.0428,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-002", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Vila Lemos",
    nomePublico: "Vila Lemos - Gabriel Leite e Helen Morais",
    lideres: ["Gabriel Leite", "Helen Morais"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.9213, longitude: -47.0337,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-003", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Jardim Santa Amália",
    nomePublico: "Jardim Santa Amália - Kimberly Nogueira e Felipe Viana",
    lideres: ["Kimberly Nogueira", "Felipe Viana"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.9401, longitude: -47.0957,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-004", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Centro",
    nomePublico: "Centro - Clara Oliveira e Mateus Prado",
    lideres: ["Clara Oliveira", "Mateus Prado"],
    diaSemana: "Terça-feira", horario: "20h",
    latitude: -22.9051, longitude: -47.0601,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-005", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Nova Europa",
    nomePublico: "Nova Europa - Gadiel Cruz e Aline Carmo",
    lideres: ["Gadiel Cruz", "Aline Carmo"],
    diaSemana: "Quinta-feira", horario: "20h",
    latitude: -22.9445, longitude: -47.0605,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-006", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Country Ville",
    nomePublico: "Country Ville - Vinicius Agata e Letícia Pedroso",
    lideres: ["Vinicius Agata", "Letícia Pedroso"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.8975, longitude: -47.0700,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-007", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Valinhos", regiao: "Valinhos",
    nomePublico: "Valinhos - Renan Domingues",
    lideres: ["Renan Domingues"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.9440, longitude: -46.9882,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-008", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Jardim dos Oliveiras",
    nomePublico: "Jardim dos Oliveiras - Danilo Quintiliano",
    lideres: ["Danilo Quintiliano"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.9303, longitude: -47.0359,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-009", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Sumaré", regiao: "Sumaré",
    nomePublico: "Sumaré - Kariny Silva",
    lideres: ["Kariny Silva"],
    diaSemana: "Quinta-feira", horario: "19h30",
    latitude: -22.8415, longitude: -47.1946,
    observacoes: "Localização aproximada por segurança."
  },
  {
    id: "vox-010", faixa: "Vox", faixaDescricao: "18 a 29 anos",
    cidade: "Campinas", regiao: "Jd. Guanabara",
    nomePublico: "Jd. Guanabara - Mariana Silva e Sabrina Carmo",
    lideres: ["Mariana Silva", "Sabrina Carmo"],
    diaSemana: "Sábado", horario: "14h",
    latitude: -22.8849, longitude: -47.0658,
    observacoes: "Grupo feminino. Localização aproximada por segurança."
  }
];

// =============================================================
// LINKS ONLINE
// Para adicionar um novo Link online, copie um bloco abaixo.
// =============================================================
const linksOnline = [
  // FAM
  {
    id: "fam-online-001", faixa: "Família", faixaDescricao: "Famílias e adultos em geral",
    nomePublico: "Online - Leonardo e Elisua Rodrigues",
    lideres: ["Leonardo", "Elisua Rodrigues"],
    diaSemana: "Quinta-feira", horario: "19h30"
  },
  // FLOW
  {
    id: "flow-online-001", faixa: "Flow", faixaDescricao: "15 a 17 anos",
    nomePublico: "Online - Esther Vitória",
    lideres: ["Esther Vitória"],
    diaSemana: "Quinta-feira", horario: "20h"
  },
  {
    id: "flow-online-002", faixa: "Flow", faixaDescricao: "15 a 17 anos",
    nomePublico: "Online - Naiara",
    lideres: ["Naiara"],
    diaSemana: "Quinta-feira", horario: "20h"
  },
  {
    id: "flow-online-003", faixa: "Flow", faixaDescricao: "15 a 17 anos",
    nomePublico: "Online - Belle Gargalak",
    lideres: ["Belle Gargalak"],
    diaSemana: "Terça-feira", horario: "20h"
  },
  {
    id: "flow-online-004", faixa: "Flow", faixaDescricao: "15 a 17 anos",
    nomePublico: "Online - Pedro Augusto",
    lideres: ["Pedro Augusto"],
    diaSemana: "A confirmar", horario: ""
  },
  {
    id: "flow-online-005", faixa: "Flow", faixaDescricao: "15 a 17 anos",
    nomePublico: "Online - Guilherme Assis",
    lideres: ["Guilherme Assis"],
    diaSemana: "Quinta-feira", horario: "20h"
  },
  {
    id: "flow-online-006", faixa: "Flow", faixaDescricao: "15 a 17 anos",
    nomePublico: "Online - Richard Mattos",
    lideres: ["Richard Mattos"],
    diaSemana: "Terça-feira", horario: "20h"
  },
  // RISE
  {
    id: "rise-online-001", faixa: "Rise", faixaDescricao: "12 a 14 anos",
    nomePublico: "Online - Pedro Moraes",
    lideres: ["Pedro Moraes"],
    diaSemana: "Quinta-feira", horario: "20h"
  },
  {
    id: "rise-online-002", faixa: "Rise", faixaDescricao: "12 a 14 anos",
    nomePublico: "Online - André Marques",
    lideres: ["André Marques"],
    diaSemana: "Terça-feira", horario: "17h"
  },
  {
    id: "rise-online-003", faixa: "Rise", faixaDescricao: "12 a 14 anos",
    nomePublico: "Online - Félix",
    lideres: ["Félix"],
    diaSemana: "Terça-feira", horario: "19h30"
  },
  {
    id: "rise-online-004", faixa: "Rise", faixaDescricao: "12 a 14 anos",
    nomePublico: "Online - Isabela Russani e Andresa",
    lideres: ["Isabela Russani", "Andresa"],
    diaSemana: "Quinta-feira", horario: "18h"
  },
  {
    id: "rise-online-005", faixa: "Rise", faixaDescricao: "12 a 14 anos",
    nomePublico: "Online - Noemi e Rebecca Tauber",
    lideres: ["Noemi", "Rebecca Tauber"],
    diaSemana: "Quinta-feira", horario: "18h"
  }
];

// =============================================================
// INICIALIZAÇÃO DO MAPA
// =============================================================
let mapa;
let marcadores = {}; // id → marcador Leaflet

function criarIconePin(faixa) {
  return L.divIcon({
    className: "",
    html: `<div class="marker-pin marker-${faixa}"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -30]
  });
}

function formatarHorario(dia, hora) {
  if (!dia || dia === "A confirmar") return "A confirmar";
  if (!hora) return dia;
  return `${dia} às ${hora}`;
}

function criarPopupHTML(link) {
  const lideresStr = link.lideres.join(" e ");
  const formularioUrl = getFormularioUrl(link.faixa);
  return `
    <div class="popup-link">
      <h3>${link.nomePublico}</h3>
      <div class="popup-row"><strong>Faixa:</strong> ${link.faixa}</div>
      <div class="popup-row"><strong>Idade:</strong> ${link.faixaDescricao}</div>
      <div class="popup-row"><strong>Dia:</strong> ${link.diaSemana}</div>
      <div class="popup-row"><strong>Horário:</strong> ${link.horario}</div>
      <div class="popup-row"><strong>Região:</strong> ${link.regiao}${(link.cidade !== "Campinas" && link.cidade !== link.regiao) ? ", " + link.cidade : ""}</div>
      <div class="popup-row"><strong>Líder${link.lideres.length > 1 ? "es" : ""}:</strong> ${lideresStr}</div>
      <p class="popup-aviso">${link.observacoes}</p>
      <a class="btn-interesse btn-interesse-${link.faixa}" href="${formularioUrl}" target="_blank" rel="noopener noreferrer">Tenho interesse</a>
    </div>
  `;
}

function iniciarMapa() {
  mapa = L.map("mapa").setView([-22.9099, -47.0626], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(mapa);

  linksPresenciais.forEach(link => {
    const marcador = L.marker([link.latitude, link.longitude], {
      icon: criarIconePin(link.faixa),
      title: link.nomePublico
    }).addTo(mapa);

    marcador.bindPopup(criarPopupHTML(link), { maxWidth: 260 });
    marcadores[link.id] = marcador;
  });
}

// =============================================================
// FILTROS E LISTA LATERAL
// =============================================================
function popularFiltroRegioes() {
  const regioes = [...new Set(linksPresenciais.map(l => {
    return l.cidade !== "Campinas" ? l.cidade : l.regiao;
  }).filter(Boolean))].sort();

  const select = document.getElementById("filtro-regiao");
  regioes.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    select.appendChild(opt);
  });
}

function aplicarFiltros() {
  const faixaSel   = document.getElementById("filtro-faixa").value;
  const diaSel     = document.getElementById("filtro-dia").value;
  const regiaoSel  = document.getElementById("filtro-regiao").value;

  const filtrados = linksPresenciais.filter(link => {
    const chaveRegiao = link.cidade !== "Campinas" ? link.cidade : link.regiao;
    if (faixaSel  && link.faixa     !== faixaSel)  return false;
    if (diaSel    && link.diaSemana !== diaSel)     return false;
    if (regiaoSel && chaveRegiao    !== regiaoSel) return false;
    return true;
  });

  // Atualiza visibilidade dos marcadores
  linksPresenciais.forEach(link => {
    const marcador = marcadores[link.id];
    if (!marcador) return;
    const visivel = filtrados.some(f => f.id === link.id);
    if (visivel) {
      if (!mapa.hasLayer(marcador)) mapa.addLayer(marcador);
    } else {
      if (mapa.hasLayer(marcador)) mapa.removeLayer(marcador);
    }
  });

  renderizarLista(filtrados);
}

function renderizarLista(lista) {
  const container = document.getElementById("lista-items");
  const semResultado = document.getElementById("sem-resultado");
  container.innerHTML = "";

  if (lista.length === 0) {
    semResultado.hidden = false;
    return;
  }
  semResultado.hidden = true;

  lista.forEach(link => {
    const regiaoExibida = (link.cidade !== "Campinas" && link.cidade !== link.regiao)
      ? `${link.regiao}, ${link.cidade}`
      : link.cidade !== "Campinas"
        ? link.cidade
        : link.regiao;
    const lideresStr = link.lideres.join(" e ");
    const formularioUrl = getFormularioUrl(link.faixa);

    const card = document.createElement("div");
    card.className = "card-lista";
    card.innerHTML = `
      <span class="badge badge-${link.faixa}">${link.faixa} · ${link.faixaDescricao}</span>
      <div class="card-lista-nome">${link.nomePublico}</div>
      <div class="card-lista-info">
        ${formatarHorario(link.diaSemana, link.horario)}<br>
        Região: ${regiaoExibida}
      </div>
      <div class="card-lista-acoes">
        <button class="btn-ver-mapa" data-id="${link.id}" type="button">Ver no mapa</button>
        <a class="btn-interesse btn-interesse-${link.faixa}" href="${formularioUrl}" target="_blank" rel="noopener noreferrer">Tenho interesse</a>
      </div>
    `;
    container.appendChild(card);
  });

  // Listener "Ver no mapa"
  container.querySelectorAll(".btn-ver-mapa").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const marcador = marcadores[id];
      if (marcador) {
        mapa.setView(marcador.getLatLng(), 15, { animate: true });
        marcador.openPopup();
      }
    });
  });
}

// =============================================================
// LINKS ONLINE
// =============================================================
function renderizarOnline() {
  const container = document.getElementById("lista-online");
  container.innerHTML = "";

  linksOnline.forEach(link => {
    const formularioUrl = getFormularioUrl(link.faixa);
    const lideresStr = link.lideres.join(" e ");
    const horarioStr = link.horario
      ? `${link.diaSemana} às ${link.horario}`
      : link.diaSemana;

    const card = document.createElement("div");
    card.className = "card-online";
    card.innerHTML = `
      <span class="badge badge-${link.faixa}">${link.faixa} · ${link.faixaDescricao}</span>
      <div class="card-online-nome">${lideresStr}</div>
      <div class="card-online-info">
        <span>${horarioStr}</span>
        <span>🌐 Link online</span>
      </div>
      <a class="btn-interesse btn-interesse-${link.faixa}" href="${formularioUrl}" target="_blank" rel="noopener noreferrer">Tenho interesse</a>
    `;
    container.appendChild(card);
  });
}

// =============================================================
// INICIALIZAÇÃO
// =============================================================
document.addEventListener("DOMContentLoaded", () => {
  try {
    iniciarMapa();
  } catch (e) {
    document.getElementById("mapa").innerHTML =
      '<p style="padding:20px;color:#c53030;">Não foi possível carregar o mapa no momento. Tente novamente mais tarde.</p>';
  }

  popularFiltroRegioes();
  renderizarLista(linksPresenciais);
  renderizarOnline();

  document.getElementById("filtro-faixa").addEventListener("change", aplicarFiltros);
  document.getElementById("filtro-dia").addEventListener("change", aplicarFiltros);
  document.getElementById("filtro-regiao").addEventListener("change", aplicarFiltros);

  document.getElementById("btn-limpar").addEventListener("click", () => {
    document.getElementById("filtro-faixa").value = "";
    document.getElementById("filtro-dia").value = "";
    document.getElementById("filtro-regiao").value = "";
    aplicarFiltros();
  });
});
