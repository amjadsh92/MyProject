/*
  Warnings:

  - You are about to drop the column `password` on the `UserLogin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `UserLogin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `passwordHash` to the `UserLogin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserLogin` DROP COLUMN `password`,
    ADD COLUMN `passwordHash` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `UserLogin_email_key` ON `UserLogin`(`email`);
