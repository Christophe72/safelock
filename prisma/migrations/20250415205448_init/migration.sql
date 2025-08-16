-- CreateTable
CREATE TABLE "CableSelection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "calibre" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "section" INTEGER NOT NULL,
    "note" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
