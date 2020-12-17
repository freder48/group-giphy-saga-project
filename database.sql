CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"giphy_id" VARCHAR(80) NOT NULL,
	"title" VARCHAR(100),
	"url" VARCHAR(500), 
	"category_id" INT REFERENCES "category"
);

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');



INSERT INTO "favorite" (giphy_id, title, url, category_id)
VALUES ('IbBQNAVbd7Sfi8DSRT', 'Happy Dance GIF by Lilrose', 'https://media4.giphy.com/media/IbBQNAVbd7Sfi8DSRT/giphy.webp?cid=b542cc81n7smib89gef9bkfhca9g6969m730x8pfk4e4p4y9&rid=giphy.webp', 1 );

INSERT INTO "favorite" (giphy_id, title, url, category_id)
VALUES ('WmkqburJqXziM', 'HFresh Prince Of Bel Air Dance GIF', 'https://media0.giphy.com/media/WmkqburJqXziM/giphy.gif?cid=b542cc81htg8c2eoz17yjox4uc54wphu3ow1xmx14vmc23eo&rid=giphy.gif', 1 );

INSERT INTO "favorite" (giphy_id, title, url, category_id)
VALUES ('WmkqburJqXziM', 'HFresh Prince Of Bel Air Dance GIF', 'https://media0.giphy.com/media/WmkqburJqXziM/giphy.gif?cid=b542cc81htg8c2eoz17yjox4uc54wphu3ow1xmx14vmc23eo&rid=giphy.gif', 1 );

INSERT INTO "favorite" (giphy_id, title, url, category_id)
VALUES ('6s1hcLp1VQzTSRu7Jl', 'Leonardo Dicaprio Dancing GIF', 'https://media1.giphy.com/media/6s1hcLp1VQzTSRu7Jl/giphy.gif?cid=b542cc81zzkzjtdcj7j0mr2vurpgs87kkqf3ul6b275ab3xb&rid=giphy.gif', 2 );
