import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable({})
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgres://temo-dev:S15UHqcolJTB@ep-steep-math-885945-pooler.eu-central-1.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=10',
        },
      },
    });
  }
}
