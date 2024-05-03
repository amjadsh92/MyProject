/*
  Warnings:

  - The primary key for the `Hit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[index]` on the table `Hit` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Hit` DROP PRIMARY KEY;

-- CreateIndex
CREATE UNIQUE INDEX `Hit_index_key` ON `Hit`(`index`);
