import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable({})
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgres://default:SZePyH1U9Gik@ep-shy-fog-278804-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15',
        },
      },
    });
  }
}
