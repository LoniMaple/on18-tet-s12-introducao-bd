const mongoose = require("mongoose");
const PacienteSchema = require("../models/PacienteSchema");
const pacienteSchema = require("../models/PacienteSchema");


const criarPaciente = async(requisicao, resposta) => {
    const { nome, telefone, endereco, plano_saude, plano_saude_numero } = requisicao.body;

    try {
        const paciente = new PacienteSchema({
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            plano_saude: plano_saude,
            plano_saude_numero: plano_saude_numero
        });

        const salvarPaciente = await paciente.save();

        resposta.status(201).json({
            paciente: salvarPaciente
        });
        
    } catch (error) {
        resposta.status(400).json({
            messagem: error.message
        });
    }
}



module.exports = {
    criarPaciente
}