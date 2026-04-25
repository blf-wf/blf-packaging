import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { zodResolver as baseResolver } from "@hookform/resolvers/zod"
import type { FieldValues, Resolver } from "react-hook-form"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** zodResolver wrapper — bridges @hookform/resolvers + Zod v4 type gap */
export function zodResolver<
  Output,
  Input extends FieldValues,
  T extends { _output?: Output; _input?: Input }
>(schema: T, options?: Parameters<typeof baseResolver>[1]): Resolver<Input, unknown, Output> {
  return baseResolver(schema as unknown as Parameters<typeof baseResolver>[0], options) as Resolver<Input, unknown, Output>
}
