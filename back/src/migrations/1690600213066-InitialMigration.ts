import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690600213066 implements MigrationInterface {
    name = 'InitialMigration1690600213066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying NOT NULL`);
    }

}
