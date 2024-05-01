import prisma from "@/lib/prisma";

export async function GET() {
  await prisma.property.updateMany({
    data: {
      userId: "kp_3f9629c74528470786077c66746aa7de",
    },
  });
}
