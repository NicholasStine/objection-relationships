# Objection.js Relational Mapping and Foregin Keys

## Current Problem
I need to include relationMappings in my knex.Model() for a database in development, but the confusion I have around ORM linking and querying (select and insert) is slowing progress immensly

## Action Steps
Code your little buns off! 
This repo is a follow along of The [Objection with Relationships](https://www.youtube.com/watch?v=OrWfZiYxPxU&t=2527s) by <em>Kyle Coberly</em>, and all credit goes to him for his excelent and speedy tutorial. (Seriously, he codes fast, and keeping up is a fun challenge!)

In addition to the code, I would like to write some bash (.sh) files that perform relationship validation. I may even be able to write some bash scripts that perform the "npx knex ..." cli operations for migrating and seeding and all that! Can I link .sh files to the package.json file and just run them as "npm run ..."? That would be very, very cool.

## The Goal
Ideally by tonight at 9:00pm (it's currently 6:29 @ 02/22/2020) I'll be able to confidently write Objection.js models with working "return get relationMappings()" methods, knex migration file(s) that defines table schemas and foreign key references, and finally seed the seed file(s) to occupy the tables with data that fits both the schemas AND the relations.

