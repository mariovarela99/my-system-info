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

const Info = {
  nome_do_pc,
  plataforma,
  arquitectura,
  nucleos,
  memoria_total,
  memoria_livre,
  placas_de_rede,
  diretorio_raiz,
  diretorio_de_arquivos_temporarios,
  information_do_usuario,
  versao_do_sistema,
  tempo_ligado,
};

module.exports = Info;
