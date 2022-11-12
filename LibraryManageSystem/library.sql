/*
 Navicat Premium Data Transfer

 Source Server         : Waylon
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : library

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 12/11/2022 17:26:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('0', '0');
INSERT INTO `account` VALUES ('yac', '123123');
INSERT INTO `account` VALUES ('pzc', '123');
INSERT INTO `account` VALUES ('132', '123321');
INSERT INTO `account` VALUES ('1', '1234');
INSERT INTO `account` VALUES ('Waylon', '123456');

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cover` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `date` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `press` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `abs` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cid` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', '../Images/book-1.jpg', '鲁滨逊漂流记', '笛福', '201909', '四川文艺出版社', '勇敢挑战大自然，充满拼搏的孤岛求生记', '1');
INSERT INTO `book` VALUES ('10', '../Images/book-10.jpg', '你还能卷', '杨尉', '202201', '鼎利出版社', '卷不死就往死里卷', '4');
INSERT INTO `book` VALUES ('12', '../Images/book-12.jpg', '睡觉的奥秘', 'Waylon', '202206', '绵阳出版社', '睡觉的奥秘', '3');
INSERT INTO `book` VALUES ('13', '../Images/book-12.jpg', '睡觉的奥秘', 'Waylon', '202206', '绵阳出版社', '睡觉的奥秘', '3');
INSERT INTO `book` VALUES ('16', '../Images/book-11.jpg', '我从来不倦', '小虎', '202108', '鼎利出版社', '学习让我孜孜不倦的故事', '4');
INSERT INTO `book` VALUES ('17', '../Images/book-10.jpg', '你还能卷', '杨尉', '202201', '鼎利出版社', '卷不死就往死里卷', '4');
INSERT INTO `book` VALUES ('18', '../Images/book-10.jpg', '你是废物', '杨尉', '202201', '鼎利出版社', '卷不死就往死里卷', '4');
INSERT INTO `book` VALUES ('19', '../Images/book-9.jpg', '普希金抒情短诗集', '普希金', '201909', '四川出版社', '心灵甘泉', '1');
INSERT INTO `book` VALUES ('2', '../Images/book-2.jpg', '李自成', '姚雪垠', '202010', '未知出版社', '明末李自成领导的农民起义军由渺小变得强大', '2');
INSERT INTO `book` VALUES ('20', '../Images/book-9.jpg', '普希金抒情短诗集', '普希金', '201909', '四川出版社', '心灵甘泉', '1');
INSERT INTO `book` VALUES ('21', '../Images/book-9.jpg', '普希金抒情短诗集', '普希金', '201909', '四川出版社', '心灵甘泉', '1');
INSERT INTO `book` VALUES ('22', '../Images/book-8.jpg', '人间草木', '汪曾祺', '200810', '江西文艺出版社', '人间草木', '3');
INSERT INTO `book` VALUES ('23', '../Images/book-8.jpg', '人间草木', '汪曾祺', '200810', '江西文艺出版社', '人间草木', '3');
INSERT INTO `book` VALUES ('24', '../Images/book-7.jpg', '绿野仙踪', '弗兰克鲍姆', '201702', '大连出版社', '绿野仙踪', '1');
INSERT INTO `book` VALUES ('26', '../Images/book-6.jpg', '放生羊', '次仁罗布', '200912', '未知出版社', '放生羊', '3');
INSERT INTO `book` VALUES ('28', '../Images/book-5.jpg', '天上的市街', '郭沫若', '201701', '未知出版社', '天上的市街', '3');
INSERT INTO `book` VALUES ('29', '../Images/book-5.jpg', '天上的市街', '郭沫若', '201701', '未知出版社', '天上的市街', '3');
INSERT INTO `book` VALUES ('3', '../Images/book-3.jpg', '老人与海', '海明威', '201810', '四川文艺出版社', '老人与海', '1');
INSERT INTO `book` VALUES ('30', '../Images/book-4.jpg', '太阳照在桑干河上', '丁玲', '202201', '未知出版社', '太阳照在桑干河上', '3');
INSERT INTO `book` VALUES ('31', '../Images/book-4.jpg', '太阳照在桑干河上', '丁玲', '202201', '未知出版社', '太阳照在桑干河上', '3');
INSERT INTO `book` VALUES ('32', '../Images/book-3.jpg', '老人与海', '海明威', '201810', '四川文艺出版社', '老人与海', '1');
INSERT INTO `book` VALUES ('33', '../Images/book-3.jpg', '老人与海', '海明威', '201810', '四川文艺出版社', '老人与海', '1');
INSERT INTO `book` VALUES ('34', '../Images/book-2.jpg', '李自成', '姚雪垠', '202010', '未知出版社', '明末李自成领导的农民起义军由渺小变得强大', '2');
INSERT INTO `book` VALUES ('35', '../Images/book-2.jpg', '李自成', '姚雪垠', '202010', '未知出版社', '明末李自成领导的农民起义军由渺小变得强大', '2');
INSERT INTO `book` VALUES ('36', '../Images/book-1.jpg', '鲁滨逊漂流记', '笛福', '201909', '四川文艺出版社', '勇敢挑战大自然，充满拼搏的孤岛求生记', '1');
INSERT INTO `book` VALUES ('37', '../Images/book-1.jpg', '鲁滨逊漂流记', '笛福', '201909', '四川文艺出版社', '勇敢挑战大自然，充满拼搏的孤岛求生记', '1');
INSERT INTO `book` VALUES ('4', '../Images/book-4.jpg', '太阳照在桑干河上', '丁玲', '202201', '未知出版社', '太阳照在桑干河上', '3');
INSERT INTO `book` VALUES ('5', '../Images/book-5.jpg', '天上的市街', '郭沫若', '201701', '未知出版社', '天上的市街', '3');
INSERT INTO `book` VALUES ('6', '../Images/book-6.jpg', '放生羊', '次仁罗布', '200912', '未知出版社', '放生羊', '3');
INSERT INTO `book` VALUES ('7', '../Images/book-7.jpg', '绿野仙踪', '弗兰克鲍姆', '201702', '大连出版社', '绿野仙踪', '1');
INSERT INTO `book` VALUES ('8', '../Images/book-8.jpg', '人间草木', '汪曾祺', '200810', '江西文艺出版社', '人间草木', '3');
INSERT INTO `book` VALUES ('9', '../Images/book-9.jpg', '普希金抒情短诗集', '普希金', '201909', '四川出版社', '心灵甘泉', '1');

SET FOREIGN_KEY_CHECKS = 1;
