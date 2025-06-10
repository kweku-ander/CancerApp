import {sql} from "drizzle-orm";
// import { varchar } from "drizzle-orm/mysql-core";
import {integer,varchar, variable, pgTable, serial, text} from "drizzle-orm/pg-core";

export const Users = pgTable ("user",{
    id: serial("id").primaryKey(),
    username: varchar("username", {length: 255}).notNull(),
    age: integer("age").notNull(),
    location: varchar("location", {length: 255}).notNull(),
    createdBy: varchar("created_by", {length: 255}).notNull(),
});


export const Records = pgTable('records', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(()=>Users.id).notNull(),
    recordName: varchar('record_name', {length: 255}).notNull(),
    analysisResult: varchar('analysis_result', {length: 255}).notNull(),
    kanbanRecords: varchar('kanban_records', {length: 255}).notNull(),
    createdBy: varchar('created_by', {length: 255}).notNull(),
});