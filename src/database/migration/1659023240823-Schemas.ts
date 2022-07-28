import { MigrationInterface, QueryRunner } from 'typeorm';

export class Schemas1659023240823 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.createSchema('user'),
      queryRunner.createSchema('catalog'),
      queryRunner.createSchema('order'),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all([
      queryRunner.dropSchema('user'),
      queryRunner.dropSchema('catalog'),
      queryRunner.dropSchema('order'),
    ]);
  }
}
