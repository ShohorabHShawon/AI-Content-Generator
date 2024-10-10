import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: text("formData").notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: text("templateSlug").notNull(),
  createdBy: text("createdBy").notNull(),
  createdAt: text("createdAt"),
});
