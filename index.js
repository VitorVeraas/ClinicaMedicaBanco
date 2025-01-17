"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const medico_1 = require("./medicos/medico");
const consulta_1 = require("./consulta/consulta");
const telefone_1 = require("./telefone/telefone");
const paciente_1 = require("./paciente/paciente");
function main() {
    function loop() {
        console.log(`
=====================
    MENU S.G.C.M.
1. Menu de medico
2. Menu de paciente
3. Menu de consulta
4. Menu de telefones do paciente
5. Sair do programa
=====================
`);
        let opcaoCrud = readline_sync_1.default.questionInt("Digite a sua opcao:");
        switch (opcaoCrud) {
            case 1:
                console.log(`
=====================
    MENU S.G.C.M.
1. Inserir um medico
2. Listar medico por crm
3. Listar medico por especialidade
4. Alterar um medico pelo crm
5. Excluir um medico pelo crm
6. Voltar
=====================
`);
                const opcaoMedico = readline_sync_1.default.questionInt("Digite a sua opcao:");
                switch (opcaoMedico) {
                    case 1:
                        const nome_medico = readline_sync_1.default.question("Digite o nome do medico: ");
                        const especialidade_medico = readline_sync_1.default.question("Digite a especialidade do medico: ");
                        const crm_medico = readline_sync_1.default.question("Digite o crm do medico: ");
                        const novoMedico = new medico_1.Medico(0, nome_medico, especialidade_medico, crm_medico);
                        (0, medico_1.inserirMedico)(novoMedico, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao inserir o medico", erro);
                            }
                            else {
                                console.log("Medico inserido com sucesso!", resultado);
                            }
                            loop();
                        });
                        break;
                    case 2:
                        const medicoCrmBuscar = readline_sync_1.default.question("Digite o CRM do medico: ");
                        (0, medico_1.listarMedicoPeloCrm)(medicoCrmBuscar, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao buscar o medico", erro);
                            }
                            else {
                                console.log("Medico encontrado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 3:
                        const medicoEspecialidade = readline_sync_1.default.question("Digite a especialidade do medico: ");
                        (0, medico_1.listarMedicoPelaEspecialidade)(medicoEspecialidade, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Medico atualizado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 4:
                        const medicoCrmAntigo = readline_sync_1.default.question("Digite o CRM do medico que deseja alterar: ");
                        const medicoNomeNovo = readline_sync_1.default.question("Digite o nome novo do medico: ");
                        const medicoEspecialidadeNova = readline_sync_1.default.question("Digite a especialidade nova: ");
                        const medicoCrmNovo = readline_sync_1.default.question("Digite o CRM novo do medico: ");
                        const medicoAtualizado = new medico_1.Medico(0, medicoNomeNovo, medicoEspecialidadeNova, medicoCrmNovo);
                        (0, medico_1.alterarMedicoPeloCrm)(medicoCrmAntigo, medicoAtualizado, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Medico atualizado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 5:
                        const medicoCrmExcluir = readline_sync_1.default.question("Digite o CRM do medico que deseja excluir: ");
                        (0, medico_1.excluirMedicoPeloCrm)(medicoCrmExcluir, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Medico excluido com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 6:
                        loop();
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                // break do switch medico
                break;
            case 2:
                console.log(`
=====================
    MENU S.G.C.M.
1. Inserir um paciente
2. Listar paciente pelo CPF
3. Alterar paciente pelo CPF
4. Excluir paciente pelo CPF
5. Voltar
=====================
`);
                const opcaoPaciente = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoPaciente) {
                    case 1:
                        const nomePaciente = readline_sync_1.default.question("Digite o nome do paciente: ");
                        const dataNascimento = readline_sync_1.default.question("Digite a data de nascimento (FORMATO AAAA-MM-DD): ");
                        const cpfPaciente = readline_sync_1.default.question("Digite o CPF do paciente: ");
                        const novoPaciente = new paciente_1.Paciente(0, nomePaciente, dataNascimento, cpfPaciente);
                        (0, paciente_1.inserirPaciente)(novoPaciente, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao inserir o medico", erro);
                            }
                            else {
                                console.log("Medico inserido com sucesso!", resultado);
                            }
                            loop();
                        });
                        break;
                    case 2:
                        const pacienteCpfBuscar = readline_sync_1.default.question("Digite o CPF do paciente: ");
                        (0, paciente_1.listarPacientePeloCpf)(pacienteCpfBuscar,(erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao buscar o paciente", erro);
                            }
                            else {
                                console.log("Paciente encontrado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 3:
                        const pacienteCpfAntigo = readline_sync_1.default.question("Digite o CPF do paciente que deseja alterar: ");
                        const pacienteNomeNovo = readline_sync_1.default.question("Digite o nome novo do paciente: ");
                        const pacienteNovaDataNascimento = readline_sync_1.default.question("Digite a nova data de nascimento do paciente: ");
                        const pacienteCpfNovo = readline_sync_1.default.question("Digite o CPF novo do paciente: ");
                        const pacienteAtualizado = new paciente_1.Paciente(0, pacienteNomeNovo, pacienteNovaDataNascimento, pacienteCpfNovo);
                        (0, paciente_1.alterarPacientePeloCpf)(pacienteCpfAntigo, pacienteAtualizado, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Paciente atualizado com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 4:
                        const pacienteCpfExcluir = readline_sync_1.default.question("Digite o CPF do paciente que deseja excluir: ");
                        (0, paciente_1.excluirPacientePeloCpf)(pacienteCpfExcluir, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Paciente excluido com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 5:
                        loop();
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                // break do switch paciente
                break;
            case 3:
                console.log(`
=====================
    MENU S.G.C.M.
1. Inserir uma consulta
2. Listar consulta pelo CPF
3. Listar consulta pelo CRM
4. Alterar consulta pelo CPF
5. Excluir consulta pelo CPF
6. Voltar
=====================
`);
                const opcaoConsulta = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoConsulta) {
                    case 1:
                        const datahora = readline_sync_1.default.question("Digite a data e a hora da consulta (FORMATO AAAA-MM-DD HH:MM:SS): ");
                        const descricao = readline_sync_1.default.question("Digite a descricao da consulta: ");
                        const forma_pagamento = readline_sync_1.default.question("Digite a forma de pagamento: ");
                        const cpf_pacienteConsulta = readline_sync_1.default.question("Digite o CPF do paciente: ");
                        const crm_medicoConsulta = readline_sync_1.default.question("Digite o CRM do medico: ");
                        const novaConsulta = new consulta_1.Consulta(0, datahora, descricao, forma_pagamento, 0, 0);
                        (0, consulta_1.inserirConsulta)(novaConsulta, crm_medicoConsulta, cpf_pacienteConsulta, (erro, resultado) => {
                            if (erro) {
                                console.error('Erro ao criar a consulta:', erro);
                            }
                            else {
                                console.log('Consulta criada com sucesso:', resultado);
                            }
                            loop();
                        });
                        break;
                    case 2:
                        const cpf_paciente = readline_sync_1.default.question("Digite o CPF do paciente que deseja achar a consulta: ");
                        (0, consulta_1.listarConsultaPeloCPF)(cpf_paciente, (erro, resultado) => {
                            if (erro) {
                                console.error('Erro ao listar consulta:', erro);
                            }
                            else {
                                console.log('Consulta encontrada com sucesso:', resultado);
                            }
                            loop();
                        });
                        break;
                    case 3:
                        const crm_medico = readline_sync_1.default.question("Digite o CRM do medico relaciado a consulta: ");
                        (0, consulta_1.listarConsultaPeloCRM)(crm_medico, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao listar consulta:", erro);
                            }
                            else {
                                console.log("Consulta encontra com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 4:
                        const cpfBuscarConsulta = readline_sync_1.default.question("Digite o CPF do paciente relacionao a consulta: ");
                        const dataHoraNova = readline_sync_1.default.question("Digite a nova data e hora da consulta (FORMATO AAAA-MM-DD HH:MM:SS): ");
                        const descricaoNova = readline_sync_1.default.question("Digite a nova descricao: ");
                        const forma_pagamentoNova = readline_sync_1.default.question("Digite a forma de pagamento: ");
                        const consultaAtualizada = new consulta_1.Consulta(0, dataHoraNova, descricaoNova, forma_pagamentoNova, 0, 0);
                        (0, consulta_1.alterarConsultaPeloCPF)(consultaAtualizada, cpfBuscarConsulta, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Consulta atualizada com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 5:
                        const excluirConsultaCPF = readline_sync_1.default.question("Digite o CPF do paciente relacionado a consulta: ");
                        (0, consulta_1.excluirConsultaPeloCPF)(excluirConsultaCPF, (erro, resultado) => {
                            if (erro) {
                                console.error(erro);
                            }
                            else {
                                console.log("Consulta excluida com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 6:
                        loop();
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                }
                // break do switch consulta
                break;
            case 4:
                console.log(`
=====================
    MENU S.G.C.M.
1. Inserir um telefone
2. Listar telefone pelo CPF
3. Alterar telefone pelo CPF
4. Excluir telefone pelo CPF
5. Voltar
=====================
`);
                const opcaoTelefone = readline_sync_1.default.questionInt("Digite a sua opcao: ");
                switch (opcaoTelefone) {
                    case 1:
                        const celular_paciente = readline_sync_1.default.questionInt("Digite o numero de celular do paciente: ");
                        const residencial_paciente = readline_sync_1.default.questionInt("Digite o telefone residencial do paciente: ");
                        const cpfPacienteTelefone = readline_sync_1.default.question("Digite o CPF do paciente relacionado ao telefone: ");
                        const telefoneNovo = new telefone_1.Telefone(0, celular_paciente, residencial_paciente, 0);
                        (0, telefone_1.inserirTelefonePaciente)(telefoneNovo, cpfPacienteTelefone, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao inserir telefone", erro);
                            }
                            else {
                                console.log("Telefone inserido com sucesso", resultado);
                            }
                            loop();
                        });
                        break;
                    case 2:
                        const cpfBuscarTelefone = readline_sync_1.default.question("Digite o CPF do paciente relacionado ao telefone: ");
                        (0, telefone_1.listarTelefonePeloCpfpaciente)(cpfBuscarTelefone, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao listar telefon:", erro);
                            }
                            else {
                                console.log("Telefone encontrado com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 3:
                        const celularNovo = readline_sync_1.default.questionInt("Digite o celular novo: ");
                        const residencialNovo = readline_sync_1.default.questionInt("Digite o telefone residencial novo: ");
                        const cpfAlterarTelefone = readline_sync_1.default.question("Digite o CPF do paciente relacionado ao telefone: ");
                        const alterarTelefone = new telefone_1.Telefone(0, residencialNovo, celularNovo, 0);
                        (0, telefone_1.alterarTelefonePeloCpf)(alterarTelefone, cpfAlterarTelefone, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao listar telefone:", erro);
                            }
                            else {
                                console.log("Telefone encontrado com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 4:
                        const cpfExcluirTelefone = readline_sync_1.default.question("Digite o CPF do paciente relacionado aao telefone que deseja excluir: ");
                        (0, telefone_1.excluirTelefonePeloCpfPaciente)(cpfExcluirTelefone, (erro, resultado) => {
                            if (erro) {
                                console.error("Erro ao excluir telefone:", erro);
                            }
                            else {
                                console.log("Telefone excluido com sucesso: ", resultado);
                            }
                            loop();
                        });
                        break;
                    case 5:
                        loop();
                        break;
                    default:
                        console.log("Digite um valor valido");
                        loop();
                        break;
                } // fim do switch telefone
                break;
            case 5:
                console.log("Programa finalizado");
                return;
            default:
                console.log("Digite um valor valido");
                loop();
                break;
        } // fim do switch menu
    }
    loop();
}
main();