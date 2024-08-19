import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
	const habit1 = await prisma.habit.upsert({
		where: { id: 1},
		update: {},
		create: {
			name: "Good habit",
			description: "This is an example of a good habit",
			type: "good",
			schedule: {
				create: {
					recurrenceStart: new Date("2024-08-16"),
					recurrenceEnd: new Date("2024-08-16"),
					type: "one time",
				},
			},
		},
	})

	const habit2 = await prisma.habit.upsert({
		where: { id: 2 },
		update: {},
		create: {
			name: "Bad habit",
			description: "This is an example of a bad habit",
			type: "bad",
			schedule: {
				create: {
					recurrenceStart: new Date("2024-08-16"),
					recurrenceEnd: new Date("2025-08-16"),
					type: "weekly",
					dayOfTheWeek: 2,
				},
			},
		},
	
	})

	console.log({ habit1, habit2});
	}

main()
  .catch((e) => {
	  console.error(e);
	  process.exit(1);
  })
  .finally(async () => {
	  await prisma.$disconnect();
  });

