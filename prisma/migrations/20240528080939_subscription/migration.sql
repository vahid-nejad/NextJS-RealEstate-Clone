-- CreateTable
CREATE TABLE "SubscriptionPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "propertyLimit" INTEGER NOT NULL,
    "imagePerPropertyLimit" INTEGER NOT NULL,
    "features" TEXT NOT NULL
);
