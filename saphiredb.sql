-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: saphiredb
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `saphiredb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `saphiredb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `saphiredb`;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(30) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `permisos` enum('admin','user') NOT NULL,
  `email` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `tarjeta_credito` varchar(19) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `fecha_alta` date NOT NULL,
  `sexo` enum('hombre','mujer') DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `unique_dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','05327893N','Alex','Algar Fernandez','admin','saphiredb@domain.com','C/ Pedriza 2, 2ºB','0000 1111 2222 3333','1992-02-18','2019-05-06','hombre'),(2,'admin','03172938N','Celia','Casado','admin','saphiredb@domain.com','C/ ','0000 2222 3333 4444','1995-05-07','2019-05-07','mujer'),(3,'admin','12345678A','Gustavo','Gustavo','admin','saphiredb@domain.com','C/ ','0000 7434 1221 0330','1987-10-11','2019-05-09','hombre'),(4,'admin','10293847F','Carlos','Carlos','admin','saphiredb@domain.com','C/ ','0000 0220 1221 0330','1985-05-04','2019-05-09','hombre'),(5,'admin','6453728K','Guillermo','Montero','admin','saphiredb@domain.com','C/ ','0000 0220 1221 0330','1990-06-18','2019-05-09','hombre'),(6,'1234','03827364K','Cristina','Algar Fernandez','user','mail@domain.com','C/ Pedriza 2, 2ºB','0000 1001 0220 3113','1989-03-31','2019-04-10','mujer'),(7,'1234','82984756F','Celia','Gómez','user','mail@domain.com','C/ Orense 69','0000 1111 2222 3333','1982-04-03','2019-04-22','mujer'),(8,'1234','82984756G','Ana','Pérez','user','mail@domain.com','C/ Real 33, 14 Bajo A','0000 1111 2222 3333','1975-10-05','2019-04-22','mujer'),(9,'1234','00192837I','José','Fernández','user','mail@domain.com','C/ Real 33, 15 2ºA','0000 1111 2222 3333','1967-06-19','2019-04-22','hombre'),(10,'1234','00192837P','Carlos','Cuenca','user','mail@domain.com','C/ Juan van Halen, 2, 2ºB','0000 1111 2222 3333','1975-12-24','2019-04-22','hombre'),(11,'1234','82980283K','María','del Holmo','user','mail@domain.com','C/ Piedrahita 13','0000 1111 2222 3333','1975-12-24','2019-04-22','mujer'),(15,'12345','01829384N','Jorge','Aldao','user','mail@domain.com','C/ Orense 69','1111 2222 3333 4444','1979-04-19','2019-04-24','hombre'),(34,'12345','94657482N','Jose Maria','Algar','user','mail@domain.com','C/ La Pedriza 2, 2ºB','1111 2222 3333 4444','1959-03-16','2019-04-24','hombre'),(46,'12345','11111111A','Pepe','Fernandez','user','mail@domain.com','C/ La Pedriza 2, 2ºB','1111 2222 3333 4444','1959-03-16','2019-04-24','hombre');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-08 19:27:02
