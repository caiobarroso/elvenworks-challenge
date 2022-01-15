CREATE DATABASE elvenworks;

CREATE TABLE information(
    id_operacao SERIAL PRIMARY KEY  
    nome_operacao VARCHAR(255) NOT NULL
    tipo_operacao VARCHAR(255) NOT NULL,
    data_operacao DATE NOT NULL
);

CREATE TABLE tipos(
    id_tipo SERIAL PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL
);

--informacao fake
INSERT INTO information (nome_operacao, tipo_operacao, data_operacao) 
VALUES('caio baroso','Host estático','09-01-2022');