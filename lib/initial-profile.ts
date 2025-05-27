import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db"; // adjust based on your Prisma client path

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Try to find existing profile
  let profile = await db.profile.findUnique({
    where: { userId: user.id },
  });

  // If not found, create new profile
  if (!profile) {
    profile = await db.profile.create({
      data: {
        userId: user.id,
        name: `${user.firstName} ${user.lastName}` || user.username || "Unknown",
        email: user.emailAddresses[0]?.emailAddress || "",
        imageUrl: user.imageUrl || "",
      },
    });
  }

  return profile;
};
