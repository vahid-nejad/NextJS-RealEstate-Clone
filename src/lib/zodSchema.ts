import validator from "validator";
import { unknown, z } from "zod";

export const AddPropertyFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  typeId: z.string().transform((data: unknown) => Number(data)),
  statusId: z.string().transform((data: unknown) => Number(data)),
  price: z.string().transform((data: unknown) => Number(data)),
  location: z.object({
    streetAddress: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    region: z.string(),
    landmark: z.string(),
  }),
  propertyFeature: z.object({
    bedrooms: z.string().transform((data: unknown) => Number(data)),
    bathrooms: z.string().transform((data: unknown) => Number(data)),
    parkingSpots: z.string().transform((data: unknown) => Number(data)),
    area: z.string().transform((data: unknown) => Number(data)),
    hasSwimmingPool: z.boolean(),
    hasGardenYard: z.boolean(),
    hasBalcony: z.boolean(),
  }),
  contact: z.object({
    name: z.string(),
    phone: z.string().refine(validator.isMobilePhone, "Please enter a valid phone number"),
    email: z.string().email(),
  }),
});
