CREATE DATABASE pokeinfo;
USE pokeinfo;
DROP DATABASE pokeinfo;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
	cep CHAR(8),
    numero INT,
    fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario)
);

CREATE TABLE quiz (
	idQuiz INT AUTO_INCREMENT,
    pontos INT,
    fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
    PRIMARY KEY (idQuiz, fkUsuario)
);

