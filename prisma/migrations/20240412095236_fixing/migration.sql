/*
  Warnings:

  - You are about to drop the column `streedAddress` on the `PropertyLocation` table. All the data in the column will be lost.
  - Added the required column `streetAddress` to the `PropertyLocation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyLocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "streetAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "landmark" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,
    CONSTRAINT "PropertyLocation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PropertyLocation" ("city", "id", "landmark", "propertyId", "region", "state", "zip") SELECT "city", "id", "landmark", "propertyId", "region", "state", "zip" FROM "PropertyLocation";
DROP TABLE "PropertyLocation";
ALTER TABLE "new_PropertyLocation" RENAME TO "PropertyLocation";
CREATE UNIQUE INDEX "PropertyLocation_propertyId_key" ON "PropertyLocation"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
