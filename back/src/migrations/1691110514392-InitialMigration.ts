import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691110514392 implements MigrationInterface {
    name = 'InitialMigration1691110514392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email_login" character varying(120) NOT NULL, "full_name" character varying NOT NULL, "emails" character varying(120) array NOT NULL, "password" character varying NOT NULL, "phone" bigint array NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_4d217bc91b1ecf421818520ca1c" UNIQUE ("email_login"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "emails" character varying(120) array NOT NULL, "phone" bigint array NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
