import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color").notNull().default("#3b82f6"),
});

export const syllabusItems = pgTable("syllabus_items", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date"),
  status: text("status").notNull().default("pending"), // pending, in_progress, completed
  priority: text("priority").notNull().default("medium"), // low, medium, high
});

export const subtasks = pgTable("subtasks", {
  id: serial("id").primaryKey(),
  itemId: integer("item_id").notNull(),
  title: text("title").notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
});

export const coursesRelations = relations(courses, ({ many }) => ({
  items: many(syllabusItems),
}));

export const syllabusItemsRelations = relations(syllabusItems, ({ one, many }) => ({
  course: one(courses, {
    fields: [syllabusItems.courseId],
    references: [courses.id],
  }),
  subtasks: many(subtasks),
}));

export const subtasksRelations = relations(subtasks, ({ one }) => ({
  item: one(syllabusItems, {
    fields: [subtasks.itemId],
    references: [syllabusItems.id],
  }),
}));

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertSyllabusItemSchema = createInsertSchema(syllabusItems).omit({ id: true });
export const insertSubtaskSchema = createInsertSchema(subtasks).omit({ id: true });

export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type SyllabusItem = typeof syllabusItems.$inferSelect;
export type InsertSyllabusItem = z.infer<typeof insertSyllabusItemSchema>;
export type Subtask = typeof subtasks.$inferSelect;
export type InsertSubtask = z.infer<typeof insertSubtaskSchema>;
