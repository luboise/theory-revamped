CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hashed TEXT
);

CREATE TABLE song (
    id INTEGER PRIMARY KEY,

    game_version INTEGER,
    title TEXT,
    title_ascii TEXT,
    artist TEXT,
    genre TEXT
);

CREATE TABLE chart (
    song_id INTEGER,
    difficulty INTEGER,

    PRIMARY KEY (song_id, difficulty),
    FOREIGN KEY (song_id) REFERENCES song (id)
) WITHOUT ROWID;

CREATE TABLE method (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    song_id INTEGER NOT NULL,
    difficulty INTEGER NOT NULL,

    title TEXT UNIQUE,

    author_id INTEGER NOT NULL,

    rating INTEGER,
    timestamp INTEGER,

    body TEXT,

    FOREIGN KEY (song_id, difficulty) REFERENCES chart (song_id, difficulty),
    FOREIGN KEY (author_id) REFERENCES user (id)
);
