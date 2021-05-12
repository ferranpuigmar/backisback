-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2021 a las 21:15:05
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `academy_calendar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `class`
--

CREATE TABLE `class` (
  `id_class` int(11) NOT NULL,
  `id_teacher` int(11) NOT NULL,
  `id_course` int(11) NOT NULL,
  `id_schedule` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `class`
--

INSERT INTO `class` (`id_class`, `id_teacher`, `id_course`, `id_schedule`, `name`, `color`) VALUES
(5, 1, 1, 1, 'Introduccion y configuracion', 'verde'),
(5, 1, 1, 2, 'Introduccion y configuracion', 'verde'),
(5, 1, 1, 4, 'Introduccion y configuracion', 'verde'),
(6, 2, 1, 3, 'Conceptos de programacion POO', 'verde'),
(8, 5, 1, 2, 'Introduccion y configuracion', 'verde'),
(9, 7, 4, 5, 'Matemáticas I', 'rosa'),
(10, 7, 4, 6, 'Matemáticas II', 'rosa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `id_course` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id_course`, `name`, `description`, `date_start`, `date_end`, `active`) VALUES
(1, 'PHP 1 - básico (modificado)', 'Conceptos básicos de PHP + modificación', '2021-04-01', '2021-06-22', 1),
(2, 'PHP 2 - Avanzado', 'Conceptos avanzados de PHP', '2021-03-01', '2021-06-01', 1),
(3, 'JAVA 1 - Básico', 'Conceptos básicos de JAVA', '2021-02-01', '2021-05-01', 0),
(4, 'JAVA 2 - Avanzado', 'Conceptos avanzados de JAVA', '2021-05-01', '2021-07-01', 1),
(5, 'WordPress 1', 'Curso de WordPress 100% práctico para poder crear una página web', '2021-05-02', '2021-05-31', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enrollment`
--

CREATE TABLE `enrollment` (
  `id_enrollment` int(11) NOT NULL,
  `id_student` int(11) NOT NULL,
  `id_course` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enrollment`
--

INSERT INTO `enrollment` (`id_enrollment`, `id_student`, `id_course`, `status`) VALUES
(1, 1, 1, 0),
(2, 2, 1, 1),
(3, 2, 5, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedule`
--

CREATE TABLE `schedule` (
  `id_schedule` int(11) NOT NULL,
  `id_class` int(11) NOT NULL,
  `time_start` time NOT NULL,
  `time_end` time NOT NULL,
  `day` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `schedule`
--

INSERT INTO `schedule` (`id_schedule`, `id_class`, `time_start`, `time_end`, `day`) VALUES
(1, 5, '09:05:00', '09:50:00', '2021-05-05'),
(2, 5, '16:05:00', '16:50:00', '2021-05-12'),
(3, 6, '11:05:00', '11:50:00', '2021-05-03'),
(4, 5, '11:30:36', '12:15:36', '2021-05-12'),
(5, 9, '10:05:06', '09:50:00', '2021-05-16'),
(6, 10, '13:13:25', '14:13:25', '2021-05-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `nif` varchar(50) NOT NULL,
  `id_user` int(11) NOT NULL,
  `date_registered` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `username`, `pass`, `email`, `name`, `surname`, `telephone`, `nif`, `id_user`, `date_registered`) VALUES
(1, 'jlopezlo', '12345678', 'jlopezlo@gmail.com', 'Jesus', 'Lopez Lopez', '611999999', '34567890C', 7, '2020-05-01 20:10:09'),
(2, 'efernandezfer', '12345678', 'efernandezfer@gmail.com', 'Elena', 'Fernandez Fernandez', '611222222', '56789012D', 8, '2021-02-01 20:10:09'),
(5, 'pblancoro', '12345678', 'pblancoro@gmail.com', 'Pedro', 'Blanco Rojo', '661444444', '89012345F', 9, '2021-04-01 20:26:30'),
(8, 'epruebare', '12345678', '', 'Estudiante', 'prueba registro', '616112233', '23456789Q', 10, '2021-05-12 13:54:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teachers`
--

CREATE TABLE `teachers` (
  `id_teacher` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `nif` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `teachers`
--

INSERT INTO `teachers` (`id_teacher`, `name`, `surname`, `telephone`, `nif`, `email`, `id_user`) VALUES
(1, 'Ferran', 'Puig Mar', '629999999', '12345678A', 'fpuigmar@backisback.com', 1),
(2, 'Carmen', 'Garcia Garcia ', '629777777', '23456789B', 'cgarciagar@backisback.com', 7),
(5, 'Antonio', 'Gonzalez Gonzalez', '612333333', '67890123E', 'agonzalezgon@backisback.com', 4),
(6, 'Manuel', 'Gomez Gomez', '626771177', '01234567Y', 'Mgomezgomez@backisback.com', 6),
(7, 'Ana', 'Morrondo', '617552244', '0987654S', 'amorrondocu@backisback.com', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `id_user_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `id_user_admin`) VALUES
(1, 'fpuigmar', '12345678', 1),
(2, 'amorrondocu', '12345678', 0),
(3, 'cgarciaga', '12345678', 0),
(4, 'agonzalezgo', '12345678', 0),
(6, 'mgomezgo', '12345678', 4),
(7, 'jlopezlo', '12345678', 0),
(8, 'efernandezfe', '12345678', 0),
(9, 'pblancoro', '12345678', 0),
(10, 'epruebare', '12345678', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_admin`
--

CREATE TABLE `users_admin` (
  `id_user_admin` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users_admin`
--

INSERT INTO `users_admin` (`id_user_admin`, `username`, `name`, `email`, `password`) VALUES
(1, 'fpuigmar', 'Ferran Puig', 'fpuigmar@backisback.com', '12345678'),
(4, 'mgomezgo', 'Manuel Gomez Gomez', 'mgomezgomez@backisback.com', '12345678');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `class`
--
ALTER TABLE `class`
  ADD UNIQUE KEY `id_teacher` (`id_teacher`,`id_course`,`id_schedule`),
  ADD KEY `id_class` (`id_class`) USING BTREE;

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id_course`),
  ADD UNIQUE KEY `name` (`name`,`date_start`,`date_end`);

--
-- Indices de la tabla `enrollment`
--
ALTER TABLE `enrollment`
  ADD PRIMARY KEY (`id_enrollment`),
  ADD UNIQUE KEY `id_student` (`id_student`,`id_course`);

--
-- Indices de la tabla `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id_schedule`);

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`email`);

--
-- Indices de la tabla `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id_teacher`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`) USING BTREE;

--
-- Indices de la tabla `users_admin`
--
ALTER TABLE `users_admin`
  ADD PRIMARY KEY (`id_user_admin`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `class`
--
ALTER TABLE `class`
  MODIFY `id_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id_course` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `enrollment`
--
ALTER TABLE `enrollment`
  MODIFY `id_enrollment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id_schedule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id_teacher` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users_admin`
--
ALTER TABLE `users_admin`
  MODIFY `id_user_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
