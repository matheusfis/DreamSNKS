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
    descQuiz VARCHAR(45),
    qtdFeitos INT NOT NULL
);

INSERT INTO quiz VALUES 
	(1, 'Quiz da Dream Sneakers', 5);
    
-- Tabela resultadoQuiz
CREATE TABLE resultadoQuiz (
	idResultadoQuiz INT,
    fkUsuario INT,
    fkQuiz INT,
    qtdAcertos INT NOT NULL,
    qtdErros INT NOT NULL,
    PRIMARY KEY (fkUsuario, fkQuiz, idResultadoQuiz),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

SELECT * FROM resultadoQuiz;

TRUNCATE usuario;