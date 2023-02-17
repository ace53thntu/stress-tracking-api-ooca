import { MigrationInterface, QueryRunner } from "typeorm";

export class tracking1676646431147 implements MigrationInterface {
    name = 'tracking1676646431147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trackings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "stress_level" smallint NOT NULL, "image" character varying, CONSTRAINT "PK_8d2bbd5e716298fa0b70749f9eb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "trackings"`);
    }

}
