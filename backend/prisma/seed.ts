import { PrismaClient } from "@prisma/client";
import { FarmSeasonStatus } from "../src/types/farmSeasonStatus";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.farmSeason.deleteMany();
  await prisma.farm.deleteMany();
  await prisma.season.deleteMany();

  // Create seasons (2021-2027)
  const seasons = await Promise.all(
    [2021, 2022, 2023, 2024, 2025, 2026, 2027].map(async (year) => {
      return prisma.season.create({
        data: {
          name: `${year}`,
        },
      });
    })
  );

  console.log("Created seasons:", seasons.map((s) => s.name).join(", "));

  // Create farms
  const farmNames = [
    "Lettuce Turnip the Beet",
    "Barley Legal",
    "Corn of the Dreams",
    "Thyme After Thyme",
  ];

  const farms = await Promise.all(
    farmNames.map(async (name) => {
      return prisma.farm.create({
        data: {
          name: name,
        },
      });
    })
  );

  console.log("Created farms:", farms.map((f) => f.name).join(", "));

  // Farm 1: New farm with just baseline subscribed
  // Year 1 (baseline) - SUBSCRIBED
  // Years 2-5 - INACTIVE
  await prisma.farmSeason.create({
    data: {
      farmId: farms[0].id,
      seasonId: seasons[2].id, // 2023 (baseline)
      isBaseline: true,
      status: FarmSeasonStatus.SUBSCRIBED,
    },
  });

  // Add the remaining 4 seasons all as INACTIVE
  for (let i = 3; i < 7; i++) {
    await prisma.farmSeason.create({
      data: {
        farmId: farms[0].id,
        seasonId: seasons[i].id, // 2024-2027
        isBaseline: false,
        status: FarmSeasonStatus.INACTIVE,
      },
    });
  }

  // Farm 2: Progress in early stages
  // Year 1 (baseline) - COMPLETED
  // Year 2 - COMPLETED
  // Year 3 - SUBSCRIBED
  // Years 4-5 - INACTIVE
  await prisma.farmSeason.create({
    data: {
      farmId: farms[1].id,
      seasonId: seasons[0].id, // 2021 (baseline)
      isBaseline: true,
      status: FarmSeasonStatus.COMPLETED,
    },
  });

  await prisma.farmSeason.create({
    data: {
      farmId: farms[1].id,
      seasonId: seasons[1].id, // 2022
      isBaseline: false,
      status: FarmSeasonStatus.COMPLETED,
    },
  });

  await prisma.farmSeason.create({
    data: {
      farmId: farms[1].id,
      seasonId: seasons[2].id, // 2023
      isBaseline: false,
      status: FarmSeasonStatus.SUBSCRIBED, // Year 3 is SUBSCRIBED
    },
  });

  // Add the remaining 2 seasons as INACTIVE
  for (let i = 3; i < 5; i++) {
    await prisma.farmSeason.create({
      data: {
        farmId: farms[1].id,
        seasonId: seasons[i].id, // 2024-2025
        isBaseline: false,
        status: "INACTIVE",
      },
    });
  }

  // Farm 3: Almost complete program
  // Years 1-3 - COMPLETED
  // Years 4-5 - INACTIVE
  for (let i = 0; i < 3; i++) {
    await prisma.farmSeason.create({
      data: {
        farmId: farms[2].id,
        seasonId: seasons[i].id, // 2021-2023
        isBaseline: i === 0, // First season is baseline
        status: FarmSeasonStatus.COMPLETED, // All first 3 seasons are COMPLETED
      },
    });
  }

  // Add remaining 2 seasons as INACTIVE
  for (let i = 3; i < 5; i++) {
    await prisma.farmSeason.create({
      data: {
        farmId: farms[2].id,
        seasonId: seasons[i].id, // 2024-2025
        isBaseline: false,
        status: FarmSeasonStatus.INACTIVE, // All remaining seasons are INACTIVE
      },
    });
  }

  // Farm 4: Completed all 5 years of the program
  // Years 1-5 - All COMPLETED
  for (let i = 0; i < 5; i++) {
    await prisma.farmSeason.create({
      data: {
        farmId: farms[3].id,
        seasonId: seasons[i].id, // 2021-2025
        isBaseline: i === 0, // First season is baseline
        status: FarmSeasonStatus.COMPLETED,
      },
    });
  }

  console.log("Created farm seasons with varied progression paths");
  console.log("Database has been seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    // Use setTimeout to exit with error after disconnect completes
    setTimeout(() => {
      console.error("Database seeding failed");
      // Using globalThis to access process safely
      if (typeof globalThis !== "undefined" && globalThis.process) {
        globalThis.process.exit(1);
      } else {
        throw new Error("Database seeding failed");
      }
    }, 100);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
