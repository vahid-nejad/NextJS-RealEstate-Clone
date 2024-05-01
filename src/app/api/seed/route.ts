import prisma from "@/lib/prisma";
import { faker } from "@faker-js/faker";

export async function GET() {
  console.log("seeding started!");

  await prisma.propertyStatus.create({
    data: { value: "For Sale" },
  });
  await prisma.propertyStatus.create({
    data: { value: "Sold" },
  });
  await prisma.propertyStatus.create({
    data: { value: "Under Contract" },
  });

  await prisma.propertyType.create({
    data: { value: "Condo" },
  });
  await prisma.propertyType.create({
    data: { value: "Apartment" },
  });
  await prisma.propertyType.create({
    data: { value: "Villa" },
  });

  for (let index = 0; index < 128; index++) {
    await prisma.property.create({
      data: {
        description: faker.location.direction(),
        name: faker.company.name(),
        price: faker.number.int({ max: 2000000, min: 100000 }),
        status: {
          connect: {
            id: faker.number.int({ max: 3, min: 1 }),
          },
        },
        type: {
          connect: {
            id: faker.number.int({ max: 3, min: 1 }),
          },
        },
        contact: {
          create: {
            email: faker.person.fullName() + "@gmail.com",
            name: faker.person.fullName(),
            phone: faker.phone.number(),
          },
        },
        location: {
          create: {
            city: faker.location.city(),
            landmark: faker.location.street(),
            region: faker.location.direction(),
            state: faker.location.state(),
            streetAddress: faker.location.streetAddress(),
            zip: faker.location.zipCode(),
          },
        },
        feature: {
          create: {
            bathrooms: faker.number.int({ max: 5, min: 0 }),
            bedrooms: faker.number.int({ max: 5, min: 0 }),
            hasBalcony: faker.datatype.boolean(),
            hasGardenYard: faker.datatype.boolean(),
            hasSwimmingPool: faker.datatype.boolean(),
            parkingSpots: faker.number.int({ max: 5, min: 0 }),
            area: faker.number.int({ max: 500, min: 50 }),
          },
        },
        user: {
          connect: {
            id: "kp_0d3a636acb7b49ffbbcd4cf3cfc4a464",
          },
        },
        images: {
          create: [
            {
              url: "https://umxdwrbfholeaqvxcsqd.supabase.co/storage/v1/object/public/propertyImages/OIP%20(1).jpg_1709392569660",
            },
            {
              url: "https://umxdwrbfholeaqvxcsqd.supabase.co/storage/v1/object/public/propertyImages/OIP%20(2).jpg_1709392796627",
            },
            {
              url: "https://umxdwrbfholeaqvxcsqd.supabase.co/storage/v1/object/public/propertyImages/OIP%20(3).jpg_1709392841915",
            },
          ],
        },
      },
    });
  }

  // await prisma.subscriptionPlan.create({
  //   data: {
  //     name: "Basic",
  //     imagesPerPropertyLimit: 3,
  //     propertyLimit: 3,
  //     price: 0,
  //     features: `Free for lifetime",
  //     Property Listing,
  //     Property Details,
  //     3 Images per Property,
  //     3 Properties Limit,
  //     Property Search`,
  //   },
  // });
  // await prisma.subscriptionPlan.create({
  //   data: {
  //     name: "Standard",
  //     price: 10,
  //     propertyLimit: 10,
  //     imagesPerPropertyLimit: 5,
  //     features: `roperty Listing,
  //         Property Details,
  //         5 Images per Property,
  //         10 Properties Limit,
  //         Property Search,
  //         AI Support,
  //         24/7 Support on Email,`,
  //   },
  // }),
  //   await prisma.subscriptionPlan.create({
  //     data: {
  //       name: "Premium",
  //       price: 25,
  //       propertyLimit: 100,
  //       imagesPerPropertyLimit: 15,
  //       features: `
  //         Property Listing,
  //         Property Details,
  //         15 Images per Property,
  //         100 Properties Limit,
  //         Property Search,
  //         AI Support,
  //         24/7 Support on Email,
  //         24/7 Support on Phone,
  //         Personal Account Manager`,
  //     },
  //   });

  console.log("seeding finished!");

  console.log("migration ended...");
}
