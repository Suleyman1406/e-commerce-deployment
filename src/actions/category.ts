'use server';

import { revalidatePath } from 'next/cache';

import { paths } from '@/paths';
import prisma from '@/lib/prisma';

export async function createCategory({ name }: { name: string }) {
  const category = await prisma.category.create({
    data: {
      name,
    },
  });

  revalidatePath(paths.dashboard.categories);
  return category;
}
