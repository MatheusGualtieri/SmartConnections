import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690495001090 implements MigrationInterface {
    name = 'InitialMigration1690495001090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email_login" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_4d217bc91b1ecf421818520ca1c" UNIQUE ("email_login")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "emails" character varying(120) array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "emails"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_4d217bc91b1ecf421818520ca1c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email_login"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(120) array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
    }

}
