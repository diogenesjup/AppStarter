-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 22-Nov-2020 às 05:16
-- Versão do servidor: 8.0.15
-- versão do PHP: 7.2.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `garimpeiros`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `api`
--

CREATE TABLE `api` (
  `id` int(9) NOT NULL,
  `versao` text,
  `status` int(9) NOT NULL,
  `termos` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `api`
--

INSERT INTO `api` (`id`, `versao`, `status`, `termos`) VALUES
(1, '1', 200, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `arquivos`
--

CREATE TABLE `arquivos` (
  `id` int(9) NOT NULL,
  `arquivo` text,
  `data_cadastro` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cdn`
--

CREATE TABLE `cdn` (
  `id` int(9) NOT NULL,
  `link` text,
  `legenda` text,
  `tipo` text,
  `data_cadastro` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `dominios`
--

CREATE TABLE `dominios` (
  `id` int(9) NOT NULL,
  `nomeloja` text,
  `urldom` text,
  `logo` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `dominios`
--

INSERT INTO `dominios` (`id`, `nomeloja`, `urldom`, `logo`) VALUES
(1, 'Extra', 'extra.com.br', 'ROMULO-IMOVEIS-8e7410526b967e868f7cfcb57fccc61c.png'),
(2, 'Submarino', 'submarino.com.br', 'ROMULO-IMOVEIS-84379ef7cf6ca4d4cd3f1a4a07b669e5.png'),
(4, 'Americanas', 'americanas.com.br', 'GARIMPEIROS-752978fe8411e119806fd8c6e8c2f6d0.jpg'),
(5, 'Fast Shop', 'fastshop.com.br', 'GARIMPEIROS-d7faec34f7a98d7f7f0515ecac0f2160.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ofertas`
--

CREATE TABLE `ofertas` (
  `id` int(9) NOT NULL,
  `id_usuario` int(9) NOT NULL,
  `titulo` text,
  `link` text,
  `loja` text,
  `desc_oferta` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `data_ini` text,
  `data_fim` text,
  `valor` text,
  `valor_promo` text,
  `cash_back` text,
  `cash_back_gpr` text,
  `data_pub` text,
  `data_alteracao` text,
  `status` text,
  `on_of` text,
  `tipo` text,
  `cupom` text,
  `instrucoes` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ofertas_campos`
--

CREATE TABLE `ofertas_campos` (
  `id` int(9) NOT NULL,
  `id_tipo_oferta` int(9) NOT NULL,
  `tipo_campo` text,
  `nome_campo` text,
  `obrigatorio` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `ofertas_campos`
--

INSERT INTO `ofertas_campos` (`id`, `id_tipo_oferta`, `tipo_campo`, `nome_campo`, `obrigatorio`) VALUES
(1, 1, 'curto', 'Título adicional', 'nao'),
(2, 1, 'longo', 'Descrição extra', 'nao'),
(3, 1, 'switch', 'Disponível offline', 'sim'),
(4, 2, 'curto', 'Valor mínimo', 'nao'),
(5, 2, 'curto', 'Máximo de itens', 'nao');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ofertas_campos_valores`
--

CREATE TABLE `ofertas_campos_valores` (
  `id` int(9) NOT NULL,
  `id_campo` int(9) NOT NULL,
  `id_oferta` int(9) NOT NULL,
  `valor` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ofertas_categoria`
--

CREATE TABLE `ofertas_categoria` (
  `id` int(9) NOT NULL,
  `nome` text,
  `descricao` text,
  `capa` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `ofertas_categoria`
--

INSERT INTO `ofertas_categoria` (`id`, `nome`, `descricao`, `capa`) VALUES
(1, 'Eletrônicos', 'As melhores ofertas de TV até smartphones', 'GARIMPEIROS-aab15f9d56ff86b2bd4c2117e35bc37b.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ofertas_tipo`
--

CREATE TABLE `ofertas_tipo` (
  `id` int(9) NOT NULL,
  `nome` text,
  `visivel_filtro` text,
  `id_ligacao` text,
  `obrigatorio_ligacao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `oferta_galeria`
--

CREATE TABLE `oferta_galeria` (
  `id` int(9) NOT NULL,
  `id_imovel` int(9) NOT NULL,
  `id_cdn` int(9) DEFAULT NULL,
  `link_arquivo` text,
  `tipo` text,
  `link` text,
  `legenda` text,
  `ordem` int(9) DEFAULT NULL,
  `capa` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(9) NOT NULL,
  `token_sms` text,
  `nome` text,
  `email` text,
  `celular` text,
  `senha` text,
  `data_cadastro` text,
  `ultimo_login` text,
  `tipo` text,
  `banco` text,
  `ag` text,
  `cc` text,
  `tipo_conta_bancaria` text CHARACTER SET utf8 COLLATE utf8_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `token_sms`, `nome`, `email`, `celular`, `senha`, `data_cadastro`, `ultimo_login`, `tipo`, `banco`, `ag`, `cc`, `tipo_conta_bancaria`) VALUES
(1, '44996', 'Diogenes Junior Teste', 'diogenesjunior.ti@gmail.com', '11945027877', 'XXX', NULL, '22/11/2020 11:00:43:000000', 'admin', NULL, NULL, NULL, NULL),
(3, '58151', 'Diogenes Junior 2', 'contato@diogenesjunior.com.br', '11978031419', '123456', '04/10/2020 18:31:40:000000', '12/10/2020 18:30:56:000000', NULL, NULL, NULL, NULL, NULL),
(5, '34393', 'Glauber Santos', 'glauber.afl@gmail.com', '31988813917', 'teste', '19/10/2020 19:33:24:000000', '02/11/2020 10:38:32:000000', 'admin', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api`
--
ALTER TABLE `api`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `arquivos`
--
ALTER TABLE `arquivos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdn`
--
ALTER TABLE `cdn`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dominios`
--
ALTER TABLE `dominios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ofertas_campos`
--
ALTER TABLE `ofertas_campos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ofertas_campos_valores`
--
ALTER TABLE `ofertas_campos_valores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ofertas_categoria`
--
ALTER TABLE `ofertas_categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ofertas_tipo`
--
ALTER TABLE `ofertas_tipo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oferta_galeria`
--
ALTER TABLE `oferta_galeria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api`
--
ALTER TABLE `api`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `arquivos`
--
ALTER TABLE `arquivos`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdn`
--
ALTER TABLE `cdn`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dominios`
--
ALTER TABLE `dominios`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ofertas_campos`
--
ALTER TABLE `ofertas_campos`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ofertas_campos_valores`
--
ALTER TABLE `ofertas_campos_valores`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ofertas_categoria`
--
ALTER TABLE `ofertas_categoria`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ofertas_tipo`
--
ALTER TABLE `ofertas_tipo`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oferta_galeria`
--
ALTER TABLE `oferta_galeria`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
