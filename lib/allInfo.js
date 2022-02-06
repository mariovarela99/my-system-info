const os = require("os");

const nome_do_pc = os.hostname();
const plataforma = os.platform();
const arquitectura = os.arch();
const nucleos = os.cpus().length;
const memoria_total = os.totalmem() / 1024 / 1024 / 1024;
const memoria_livre = os.freemem() / 1024 / 1024 / 1024;
const placas_de_rede = os.networkInterfaces().length;
const diretorio_raiz = os.homedir();
const diretorio_de_arquivos_temporarios = os.tmpdir();
const information_do_usuario = os.userInfo();
const versao_do_sistema = os.version();
const tempo_ligado = os.uptime();

const Info = [
  {
    desc: "nome_do_pc",
    value: nome_do_pc,
  },
  {
    desc: "plataforma",
    value: plataforma,
  },
  {
    desc: "arquitectura",
    value: arquitectura,
  },
  {
    desc: "nucleos",
    value: nucleos,
  },
  {
    desc: "memoria_total",
    value: memoria_total,
  },
  {
    desc: "memoria_livre",
    value: memoria_livre,
  },
  {
    desc: "placas_de_rede",
    value: placas_de_rede,
  },
  {
    desc: "diretorio_raiz",
    value: diretorio_raiz,
  },
  {
    desc: "diretorio_de_arquivos_temporarios",
    value: diretorio_de_arquivos_temporarios,
  },
  {
    desc: "information_do_usuario",
    value: information_do_usuario,
  },
  {
    desc: "versao_do_sistema",
    value: versao_do_sistema,
  },
  {
    desc: "tempo_ligado",
    value: tempo_ligado,
  },
];

module.exports = Info;
