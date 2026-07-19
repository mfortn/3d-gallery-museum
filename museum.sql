-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 19, 2026 at 02:24 AM
-- Server version: 8.0.46-0ubuntu0.24.04.3
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `museum`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery_assets`
--

CREATE TABLE `gallery_assets` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `thumbnail_url` varchar(2048) NOT NULL,
  `full_res_url` varchar(2048) NOT NULL,
  `file_url` varchar(2048) DEFAULT NULL,
  `created_year` varchar(10) DEFAULT '2026',
  `category` varchar(100) DEFAULT 'General'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `gallery_assets`
--

INSERT INTO `gallery_assets` (`id`, `title`, `description`, `thumbnail_url`, `full_res_url`, `file_url`, `created_year`, `category`) VALUES
(1, 'Starry Night Over the Rhone', 'Van Gogh\'s luminous depiction of the night sky reflected on the Rhone river.', 'https://picsum.photos/seed/art1/400/300', 'https://picsum.photos/seed/art1/1200/900', NULL, '1888', 'Impressionism'),
(2, 'The Persistence of Memory', 'Salvador Dali\'s surreal landscape with melting clocks.', 'https://picsum.photos/seed/art2/400/300', 'https://picsum.photos/seed/art2/1200/900', NULL, '1931', 'Surrealism'),
(3, 'The Birth of Venus', 'Botticelli\'s iconic Renaissance painting of Venus emerging from the sea.', 'https://picsum.photos/seed/art3/400/300', 'https://picsum.photos/seed/art3/1200/900', NULL, '1486', 'Renaissance'),
(4, 'Girl with a Pearl Earring', 'Vermeer\'s masterpiece of a young girl with a turban and pearl earring.', 'https://picsum.photos/seed/art4/400/300', 'https://picsum.photos/seed/art4/1200/900', 'https://example.com/downloads/pearl_earring.zip', '1665', 'Baroque'),
(5, 'The Scream', 'Edvard Munch\'s expressionist work depicting existential anxiety.', 'https://picsum.photos/seed/art5/400/300', 'https://picsum.photos/seed/art5/1200/900', NULL, '1893', 'Expressionism'),
(6, 'Guernica', 'Picasso\'s powerful anti-war mural in monochrome.', 'https://picsum.photos/seed/art6/400/300', 'https://picsum.photos/seed/art6/1200/900', NULL, '1937', 'Cubism'),
(7, 'The Kiss', 'Gustav Klimt\'s golden Art Nouveau embrace.', 'https://picsum.photos/seed/art7/400/300', 'https://picsum.photos/seed/art7/1200/900', 'https://example.com/downloads/klimt_kiss.zip', '1908', 'Art Nouveau'),
(8, 'Water Lilies', 'Monet\'s serene garden pond series.', 'https://picsum.photos/seed/art8/400/300', 'https://picsum.photos/seed/art8/1200/900', NULL, '1920', 'Impressionism'),
(9, 'The Great Wave off Kanagawa', 'Hokusai\'s iconic ukiyo-e woodblock print of a towering wave.', 'https://picsum.photos/seed/art9/400/300', 'https://picsum.photos/seed/art9/1200/900', NULL, '1831', 'Ukiyo-e'),
(10, 'American Gothic', 'Grant Wood\'s stern portrayal of a farmer and his daughter.', 'https://picsum.photos/seed/art10/400/300', 'https://picsum.photos/seed/art10/1200/900', 'https://example.com/downloads/american_gothic.zip', '1930', 'Regionalism'),
(11, 'Sunflowers', 'Van Gogh\'s vibrant still life of sunflowers in a vase.', 'https://picsum.photos/seed/art11/400/300', 'https://picsum.photos/seed/art11/1200/900', NULL, '1888', 'Post-Impressionism'),
(12, 'The Night Watch', 'Rembrandt\'s monumental militia company portrait.', 'https://picsum.photos/seed/art12/400/300', 'https://picsum.photos/seed/art12/1200/900', NULL, '1642', 'Baroque'),
(13, 'Whistler\'s Mother', 'Whistler\'s subdued portrait of his mother in profile.', 'https://picsum.photos/seed/art13/400/300', 'https://picsum.photos/seed/art13/1200/900', NULL, '1871', 'Realism'),
(14, 'The Garden of Earthly Delights', 'Bosch\'s surreal triptych depicting paradise, earthly life, and hell.', 'https://picsum.photos/seed/art14/400/300', 'https://picsum.photos/seed/art14/1200/900', NULL, '1515', 'Renaissance'),
(15, 'Liberty Leading the People', 'Delacroix\'s allegory of the French Revolution.', 'https://picsum.photos/seed/art15/400/300', 'https://picsum.photos/seed/art15/1200/900', NULL, '1830', 'Romanticism'),
(16, 'The Last Supper', 'Da Vinci\'s iconic depiction of Jesus and his apostles.', 'https://picsum.photos/seed/art16/400/300', 'https://picsum.photos/seed/art16/1200/900', NULL, '1498', 'Renaissance'),
(17, 'The Fighting Temeraire', 'Turner\'s atmospheric sunset scene of an old warship.', 'https://picsum.photos/seed/art17/400/300', 'https://picsum.photos/seed/art17/1200/900', NULL, '1839', 'Romanticism'),
(18, 'No. 5, 1948', 'Pollock\'s iconic drip painting on fiberboard.', 'https://picsum.photos/seed/art18/400/300', 'https://picsum.photos/seed/art18/1200/900', NULL, '1948', 'Abstract Expressionism'),
(19, 'Campbell\'s Soup Cans', 'Warhol\'s pop art depiction of commercial soup cans.', 'https://picsum.photos/seed/art19/400/300', 'https://picsum.photos/seed/art19/1200/900', NULL, '1962', 'Pop Art'),
(20, 'The Thinker', 'Rodin\'s bronze sculpture of a contemplative male figure.', 'https://picsum.photos/seed/art20/400/300', 'https://picsum.photos/seed/art20/1200/900', NULL, '1904', 'Modernism'),
(21, 'Mona Lisa', 'Da Vinci\'s enigmatic portrait of Lisa Gherardini.', 'https://picsum.photos/seed/art21/400/600', 'https://picsum.photos/seed/art21/900/1200', NULL, '1506', 'Renaissance'),
(22, 'The Creation of Adam', 'Michelangelo\'s fresco of God and Adam touching fingers.', 'https://picsum.photos/seed/art22/400/600', 'https://picsum.photos/seed/art22/900/1200', NULL, '1512', 'Renaissance'),
(23, 'Portrait of Adele Bloch-Bauer I', 'Klimt\'s golden portrait adorned with ornate patterns.', 'https://picsum.photos/seed/art23/400/600', 'https://picsum.photos/seed/art23/900/1200', NULL, '1907', 'Art Nouveau'),
(24, 'The Old Guitarist', 'Picasso\'s Blue Period painting of an elderly blind guitarist.', 'https://picsum.photos/seed/art24/400/600', 'https://picsum.photos/seed/art24/900/1200', NULL, '1904', 'Cubism'),
(25, 'The Two Fridas', 'Kahlo\'s double self-portrait in traditional and European dress.', 'https://picsum.photos/seed/art25/400/600', 'https://picsum.photos/seed/art25/900/1200', NULL, '1939', 'Surrealism'),
(26, 'Bal du Moulin de la Galette', 'Renoir\'s lively depiction of a Parisian dance garden.', 'https://picsum.photos/seed/art26/400/600', 'https://picsum.photos/seed/art26/900/1200', NULL, '1876', 'Impressionism'),
(27, 'The Third of May 1808', 'Goya\'s harrowing portrayal of wartime execution.', 'https://picsum.photos/seed/art27/400/600', 'https://picsum.photos/seed/art27/900/1200', NULL, '1814', 'Romanticism'),
(28, 'Olympia', 'Manet\'s provocative reclining nude with a black servant.', 'https://picsum.photos/seed/art28/400/600', 'https://picsum.photos/seed/art28/900/1200', NULL, '1863', 'Realism'),
(29, 'The Tree of Life', 'Klimt\'s mosaic-like painting filled with golden swirls.', 'https://picsum.photos/seed/art29/400/600', 'https://picsum.photos/seed/art29/900/1200', NULL, '1909', 'Art Nouveau'),
(30, 'Dance at Le Moulin Rouge', 'Toulouse-Lautrec\'s nightlife scene at the famous cabaret.', 'https://picsum.photos/seed/art30/400/600', 'https://picsum.photos/seed/art30/900/1200', NULL, '1890', 'Post-Impressionism'),
(31, 'The Hay Wain', 'Constable\'s pastoral landscape of a hay cart crossing a river.', 'https://picsum.photos/seed/art31/600/400', 'https://picsum.photos/seed/art31/1200/800', NULL, '1821', 'Romanticism'),
(32, 'The Angelus', 'Millet\'s solemn painting of peasants pausing to pray.', 'https://picsum.photos/seed/art32/600/400', 'https://picsum.photos/seed/art32/1200/800', NULL, '1859', 'Realism'),
(33, 'Composition VIII', 'Kandinsky\'s geometric abstract composition of shapes and lines.', 'https://picsum.photos/seed/art33/600/400', 'https://picsum.photos/seed/art33/1200/800', NULL, '1923', 'Abstract'),
(34, 'Broadway Boogie Woogie', 'Mondrian\'s grid-based abstract evoking New York energy.', 'https://picsum.photos/seed/art34/600/400', 'https://picsum.photos/seed/art34/1200/800', NULL, '1943', 'Modernism'),
(35, 'Impression, Sunrise', 'Monet\'s hazy sunrise landscape that gave Impressionism its name.', 'https://picsum.photos/seed/art35/600/400', 'https://picsum.photos/seed/art35/1200/800', NULL, '1872', 'Impressionism'),
(36, 'The School of Athens', 'Raphael\'s fresco of ancient philosophers in a grand hall.', 'https://picsum.photos/seed/art36/600/400', 'https://picsum.photos/seed/art36/1200/800', NULL, '1511', 'Renaissance'),
(37, 'The Raven', 'Doré\'s haunting illustration of Poe\'s poem.', 'https://picsum.photos/seed/art37/600/400', 'https://picsum.photos/seed/art37/1200/800', NULL, '1882', 'Romanticism'),
(38, 'Nighthawks', 'Hopper\'s eerie diner scene late at night.', 'https://picsum.photos/seed/art38/600/400', 'https://picsum.photos/seed/art38/1200/800', NULL, '1942', 'Realism'),
(39, 'The Sleeping Gypsy', 'Rousseau\'s dreamlike painting of a gypsy under the moon.', 'https://picsum.photos/seed/art39/600/400', 'https://picsum.photos/seed/art39/1200/800', NULL, '1897', 'Primitivism'),
(40, 'The Son of Man', 'Magritte\'s surreal self-portrait with a floating apple.', 'https://picsum.photos/seed/art40/600/400', 'https://picsum.photos/seed/art40/1200/800', NULL, '1964', 'Surrealism'),
(41, 'The Raft of the Medusa', 'Géricault\'s monumental shipwreck scene of desperation and hope.', 'https://picsum.photos/seed/art41/800/400', 'https://picsum.photos/seed/art41/1600/800', NULL, '1819', 'Romanticism'),
(42, 'A Sunday Afternoon on the Island of La Grande Jatte', 'Seurat\'s pointillist masterpiece of Parisians relaxing by the Seine.', 'https://picsum.photos/seed/art42/800/400', 'https://picsum.photos/seed/art42/1600/800', NULL, '1886', 'Pointillism'),
(43, 'The Death of Sardanapalus', 'Delacroix\'s violent orientalist scene of an Assyrian king.', 'https://picsum.photos/seed/art43/600/400', 'https://picsum.photos/seed/art43/1200/800', NULL, '1827', 'Romanticism'),
(44, 'Wanderer above the Sea of Fog', 'Friedrich\'s sublime landscape of a man atop a mountain.', 'https://picsum.photos/seed/art44/600/400', 'https://picsum.photos/seed/art44/1200/800', NULL, '1818', 'Romanticism'),
(45, 'The Bar at the Folies-Bergère', 'Manet\'s complex depiction of a Parisian bar scene.', 'https://picsum.photos/seed/art45/600/400', 'https://picsum.photos/seed/art45/1200/800', NULL, '1882', 'Realism'),
(46, 'Christina\'s World', 'Wyeth\'s poignant painting of a woman crawling in a field.', 'https://picsum.photos/seed/art46/600/400', 'https://picsum.photos/seed/art46/1200/800', NULL, '1948', 'Realism'),
(47, 'The Birth of Tragedy', 'Moreau\'s symbolic painting of mythological themes.', 'https://picsum.photos/seed/art47/600/400', 'https://picsum.photos/seed/art47/1200/800', NULL, '1870', 'Symbolism'),
(48, 'The Lamentation', 'Giotto\'s fresco of mourners surrounding Christ\'s body.', 'https://picsum.photos/seed/art48/600/400', 'https://picsum.photos/seed/art48/1200/800', NULL, '1305', 'Renaissance'),
(49, 'The Adoration of the Magi', 'Gentile da Fabriano\'s lavish altarpiece of the three kings.', 'https://picsum.photos/seed/art49/600/400', 'https://picsum.photos/seed/art49/1200/800', NULL, '1423', 'Renaissance'),
(50, 'Vitruvian Man', 'Da Vinci\'s iconic drawing of human proportions.', 'https://picsum.photos/seed/art50/600/600', 'https://picsum.photos/seed/art50/1200/1200', NULL, '1490', 'Renaissance'),
(51, 'The Sistine Madonna', 'Raphael\'s radiant Madonna with Saints Sixtus and Barbara.', 'https://picsum.photos/seed/art51/600/600', 'https://picsum.photos/seed/art51/1200/1200', NULL, '1514', 'Renaissance'),
(52, 'The Arnolfini Portrait', 'Van Eyck\'s meticulous double portrait with convex mirror.', 'https://picsum.photos/seed/art52/600/600', 'https://picsum.photos/seed/art52/1200/1200', NULL, '1434', 'Renaissance'),
(53, 'Las Meninas', 'Velázquez\'s complex group portrait of the Spanish court.', 'https://picsum.photos/seed/art53/600/600', 'https://picsum.photos/seed/art53/1200/1200', NULL, '1656', 'Baroque'),
(54, 'The Calling of St Matthew', 'Caravaggio\'s dramatic chiaroscuro scene of divine calling.', 'https://picsum.photos/seed/art54/600/600', 'https://picsum.photos/seed/art54/1200/1200', NULL, '1600', 'Baroque'),
(55, 'The Entombment of Christ', 'Caravaggio\'s stark deposition of Christ\'s body.', 'https://picsum.photos/seed/art55/600/600', 'https://picsum.photos/seed/art55/1200/1200', NULL, '1604', 'Baroque'),
(56, 'Judith Slaying Holofernes', 'Gentileschi\'s violent biblical scene of female vengeance.', 'https://picsum.photos/seed/art56/600/600', 'https://picsum.photos/seed/art56/1200/1200', NULL, '1620', 'Baroque'),
(57, 'The Anatomy Lesson of Dr Nicolaes Tulp', 'Rembrandt\'s group portrait of a public dissection.', 'https://picsum.photos/seed/art57/600/600', 'https://picsum.photos/seed/art57/1200/1200', NULL, '1632', 'Baroque'),
(58, 'Girl Reading a Letter at an Open Window', 'Vermeer\'s intimate domestic scene of a young woman reading.', 'https://picsum.photos/seed/art58/600/600', 'https://picsum.photos/seed/art58/1200/1200', NULL, '1659', 'Baroque'),
(59, 'The Milkmaid', 'Vermeer\'s serene painting of a maidservant pouring milk.', 'https://picsum.photos/seed/art59/600/600', 'https://picsum.photos/seed/art59/1200/1200', NULL, '1660', 'Baroque'),
(60, 'View of Delft', 'Vermeer\'s luminous cityscape of his hometown.', 'https://picsum.photos/seed/art60/600/600', 'https://picsum.photos/seed/art60/1200/1200', NULL, '1661', 'Baroque');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gallery_assets`
--
ALTER TABLE `gallery_assets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gallery_assets`
--
ALTER TABLE `gallery_assets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
