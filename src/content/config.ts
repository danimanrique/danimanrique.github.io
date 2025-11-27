import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
    schema: z.object({
        order: z.number().int().nonnegative(),
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()),
        tools: z.array(z.string()),
        link: z.string().url().nullable(),
        private: z.boolean(),
    }),
});

export const collections = {
    proyectos
};