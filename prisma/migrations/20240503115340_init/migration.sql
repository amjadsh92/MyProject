/*
  Warnings:

  - Added the required column `id` to the `Hit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Hit` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `index` INTEGER NULL,
    MODIFY `box1` VARCHAR(191) NULL,
    MODIFY `box2` VARCHAR(191) NULL,
    MODIFY `box3` VARCHAR(191) NULL,
    MODIFY `box4` VARCHAR(191) NULL,
    MODIFY `box5` VARCHAR(191) NULL,
    MODIFY `box6` VARCHAR(191) NULL,
    MODIFY `box7` VARCHAR(191) NULL,
    MODIFY `box8` VARCHAR(191) NULL,
    MODIFY `box9` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);
