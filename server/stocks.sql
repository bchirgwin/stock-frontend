-- Adminer 4.7.3 PostgreSQL dump

\connect "stocks";

DROP TABLE IF EXISTS "dashboard";
CREATE TABLE "public"."dashboard" (
    "symbol" character varying(4) NOT NULL
) WITH (oids = false);

INSERT INTO "dashboard" ("symbol") VALUES
('TSLA'),
('AAPL'),
('MSFT');

-- 2019-09-27 02:00:36.802099+00
