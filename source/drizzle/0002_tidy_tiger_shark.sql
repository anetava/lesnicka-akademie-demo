CREATE TABLE `study_attempts` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`unit` text NOT NULL,
	`content_version` text NOT NULL,
	`answers` text NOT NULL,
	`score` integer NOT NULL,
	`total` integer NOT NULL,
	`created` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `study_progress` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`unit` text NOT NULL,
	`content_version` text NOT NULL,
	`answers` text NOT NULL,
	`attempts` integer NOT NULL,
	`best_score` integer NOT NULL,
	`last_score` integer NOT NULL,
	`passed` integer NOT NULL,
	`version` integer NOT NULL,
	`updated` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `study_progress_user_unit_version` ON `study_progress` (`user_id`,`unit`,`content_version`);--> statement-breakpoint
CREATE TABLE `study_work` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`unit` text NOT NULL,
	`content_version` text NOT NULL,
	`title` text NOT NULL,
	`text` text NOT NULL,
	`version` integer NOT NULL,
	`created` text NOT NULL,
	`updated` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `study_work_user_unit_version` ON `study_work` (`user_id`,`unit`,`content_version`);