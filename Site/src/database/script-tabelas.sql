CREATE DATABASE dreamSnks;

USE dreamSnks;

-- Tabela usuario
CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

-- Tabela quiz
CREATE TABLE quiz (
    idQuiz INT AUTO_INCREMENT PRIMARY KEY,
    qtdFeitos INT NOT NULL
);

-- Tabela resultadoQuiz
CREATE TABLE resultadoQuiz (
    fkLogUsuario INT,
    fkQuiz INT,
    qtdAcertos INT NOT NULL,
    qtdErros INT NOT NULL,
    PRIMARY KEY (fkLogUsuario, fkQuiz),
    FOREIGN KEY (fkLogUsuario) REFERENCES usuario(idLogUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);


SELECT * FROM usuario;

TRUNCATE usuario;