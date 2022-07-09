import { MigrationInterface, QueryRunner } from 'typeorm';

export class Schema1657398819478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createSchema('user');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropSchema('user');
  }
}
