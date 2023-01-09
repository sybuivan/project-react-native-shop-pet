-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-103199-db.mysql-103199:10183
-- Generation Time: Jan 08, 2023 at 06:03 PM
-- Server version: 8.0.26
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mona_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `codeCart` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `idProduct` int NOT NULL,
  `idUser` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`codeCart`, `idProduct`, `idUser`, `quantity`) VALUES
('16nnxcob1glcnh9xba', 1, 18, 1),
('16nnxcob1glcnibs2g', 9, 18, 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idCategory` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idCategory`, `name`, `thumbnail`, `path`) VALUES
(1, 'Chó cảnh', '', 'cho-canh'),
(2, 'Mèo cảnh', '', 'meo-canh'),
(3, 'Hamster', '', 'hamster'),
(4, 'Thỏ', '', 'tho'),
(5, 'Phụ kiện', '', 'phu-kien');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `idComments` int NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `commentDate` date NOT NULL,
  `idOrder` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `idOrder` int NOT NULL,
  `idProduct` int NOT NULL,
  `unitPrice` int NOT NULL,
  `quantity` int NOT NULL,
  `discount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`idOrder`, `idProduct`, `unitPrice`, `quantity`, `discount`) VALUES
(110, 9, 11780000, 2, 0),
(110, 2, 24716000, 2, 0),
(110, 1, 15750000, 1, 0),
(111, 9, 11780000, 2, 0),
(111, 2, 24716000, 2, 0),
(111, 1, 15750000, 1, 0),
(112, 9, 11780000, 2, 0),
(112, 2, 24716000, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `idOrder` int NOT NULL,
  `orderDate` datetime NOT NULL,
  `idUser` int NOT NULL,
  `statusOrder` int NOT NULL,
  `totalPrice` int NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`idOrder`, `orderDate`, `idUser`, `statusOrder`, `totalPrice`, `address`) VALUES
(110, '2022-04-27 17:14:58', 16, 0, 52246000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(111, '2022-04-27 17:15:41', 16, 0, 52246000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(112, '2022-04-27 17:15:56', 16, 0, 36496000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(115, '2023-01-08 16:45:30', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(116, '2023-01-08 17:06:49', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(117, '2023-01-08 17:22:31', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(118, '2023-01-08 17:23:49', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(119, '2023-01-08 17:24:42', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(120, '2023-01-08 17:25:18', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(121, '2023-01-08 17:26:16', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(122, '2023-01-08 17:29:24', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(123, '2023-01-08 17:31:07', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(124, '2023-01-08 17:32:55', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(125, '2023-01-08 17:42:32', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(126, '2023-01-08 17:46:44', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(127, '2023-01-08 17:52:46', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(128, '2023-01-08 17:58:13', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(129, '2023-01-08 17:59:20', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri'),
(130, '2023-01-08 17:59:30', 18, 0, 21640000, 'Lac Son - Gio Son - Gio Linh - Quang Tri');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `idProduct` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `descShort` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `descTab` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `idCategory` int NOT NULL,
  `warrantyPolicy` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date_product` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idProduct`, `name`, `descShort`, `descTab`, `price`, `idCategory`, `warrantyPolicy`, `date_product`) VALUES
(1, 'Chó American Eskimo', 'Chó American Eskimo (Eskimo) là một giống chó vô cùng xinh đẹp với bộ lông trắng muốt và đôi mắt đen nhánh. Chó Eskimo từng là cún cưng của Nữ hoàng Anh Charlotte và là giống chó được nuôi phổ biến bởi giới quý tộc Anh quốc. Hiện chó Eskimo vẫn còn chưa phổ biến ở Việt Nam và hầu như chưa có trại chó nào nhân giống dòng chó này. Bài viết dưới đây Thú Kiểng sẽ tập trung chia sẻ về nguồn gốc, đặc điểm tính cách chó Eskimo thuần chủng, bên cạnh đó là giá chó Eskimo ở Việt Nam hiện nay.', '', 15750000, 1, '', '2022-04-04'),
(2, 'Bulldog Anh', '', '', 12358000, 1, '', '2022-04-03'),
(3, 'Chó Alaska', '', '', 9530000, 1, '', '2022-03-08'),
(4, 'Chó American Bully', '', '', 9895000, 1, '', '2022-03-15'),
(6, 'Chó Becgie', '', '', 5500000, 1, '', '2022-03-22'),
(7, 'Chó boston Terrier thuần chủng', '', '', 10800000, 1, '', '2022-03-29'),
(8, 'Chó Doberman Pinscher', '', '', 8900000, 1, '', '2022-04-12'),
(9, 'Mèo Anh lông dài – British Longhair', '', '', 5890000, 2, '', '2022-04-03'),
(10, 'Mèo Anh lông ngắn – British Shorthair', '', '', 8900000, 2, '', '2022-04-03'),
(11, 'Mèo Ba Tư lông dài – Persian', '', '', 7586000, 2, '', '2022-03-29'),
(12, 'Mèo Ba Tư lông ngắn – Exotic', '', '', 7540000, 2, '', '2022-04-12'),
(13, 'Mèo Mỹ tai xoắn – American Curl', '', '', 8540000, 2, '', '2022-04-04'),
(14, 'Mèo Nga mắt xanh – Russian Blue', '', '', 8700000, 2, '', '2022-04-10'),
(15, 'Mèo nhân sư không lông – Sphynx\r\n', '', '', 9820000, 2, '', '2022-04-05'),
(16, 'Mèo Thổ Nhĩ Kỳ Turkish Angora', '', '', 7900000, 2, '', '2022-04-06'),
(17, 'Bát ăn inox cho chó size nhỏ', '', '', 35000, 5, '', '2022-04-04'),
(18, 'Bộ cấp thức ăn/nước tự động cho thú cưng', '', '', 250000, 5, '', '2022-03-22'),
(19, 'Chuồng nuôi nhím kiểng, hamster laphong mica lớn.', '', '', 350000, 5, '', '2022-04-12'),
(20, 'Lồng Sân Chơi Mạo Hiểm 1 Tầng Size Lớn Màu Vàng', '', '', 570000, 5, '', '2022-04-04'),
(21, 'Chuột đuôi mập (gerbil Fat tail)', 'PetXinh chuyên cung cấp chuột đuôi mập khỏe đẹp uy tín chất lượng. Với tính tình ôn hòa hiền lành rất thân thiện với con người. Nổi bật với chiếc đuôi thừa cân mủm mỉm. Bạn có muốn sở hữu một bé đuôi mập đáng yêu làm bạn không nè? Ghé PetXinh đi nè.', '', 1000000, 3, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

CREATE TABLE `productimages` (
  `idImage` int NOT NULL,
  `idProduct` int NOT NULL,
  `thumbnailUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `productimages`
--

INSERT INTO `productimages` (`idImage`, `idProduct`, `thumbnailUrl`) VALUES
(1, 1, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/1.jpg'),
(2, 2, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/04-300x300.jpg'),
(3, 3, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/10-300x300.jpg'),
(4, 4, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/07-300x300.jpg'),
(6, 6, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/0011-300x300.jpg'),
(7, 7, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/05-300x300.jpg'),
(8, 8, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/8-300x300.jpg'),
(9, 9, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/7-1.jpg'),
(10, 10, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/02-300x300.jpg'),
(11, 11, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/1-1-300x300.jpg'),
(12, 12, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/002-300x300.jpg'),
(13, 13, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/9-300x300.jpg'),
(14, 14, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/08-1-300x300.jpg'),
(15, 15, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/0010.jpg'),
(16, 16, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/5-1-300x300.jpg'),
(17, 17, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/011-1.jpg'),
(18, 18, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/014-300x300.jpg'),
(19, 19, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/016.jpg'),
(20, 20, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/019.jpg'),
(22, 21, 'http://mauweb.monamedia.net/thunuoi/wp-content/uploads/2018/04/Untitled-1-1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int NOT NULL,
  `fullName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `fullName`, `email`, `password`) VALUES
(16, 'Tran Van Phuc', 'tranvanphuc1114@gmail.com', '$2a$10$b3i0eT5CfZw8.h39cbUXNOYVb4XwGvXau30Q7BvWdrm03qYEW6lIy'),
(18, 'Bui Van Sy', 'ngosontung@gmail.com', '$2a$10$s05OG85hBPnXDfPnj6o6Xu0iRpqZsbXeClXJehuuqYfac1GMm4IgC'),
(20, 'nguyenvantien@gmail.com', 'nguyenvantien@gmail.com', '$2a$10$i8wnskSu0H4BWn04eFubxezJtG431aaaT96mv9ZfnZTlt.hYLF2/O');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`codeCart`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idComments`),
  ADD KEY `idOrder` (`idOrder`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idOrder` (`idOrder`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idOrder`),
  ADD KEY `idUser` (`idUser`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indexes for table `productimages`
--
ALTER TABLE `productimages`
  ADD PRIMARY KEY (`idImage`),
  ADD KEY `idProduct` (`idProduct`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `idComments` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `idOrder` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `productimages`
--
ALTER TABLE `productimages`
  MODIFY `idImage` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`idOrder`);

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`idOrder`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`);

--
-- Constraints for table `productimages`
--
ALTER TABLE `productimages`
  ADD CONSTRAINT `productimages_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
