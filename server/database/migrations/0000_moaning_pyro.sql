CREATE TABLE `online` (
	`userId` integer PRIMARY KEY NOT NULL,
	`token` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`title` text NOT NULL,
	`completed` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_name` integer NOT NULL,
	`password` text NOT NULL,
	`created_at` integer NOT NULL
);
