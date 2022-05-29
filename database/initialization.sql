DROP TABLE IF EXISTS nfts;
CREATE TABLE nfts(
    id              SERIAL PRIMARY KEY,
    creator         VARCHAR,
    image_URL       VARCHAR,
    metadata_URL    VARCHAR
);





INSERT INTO nfts (creator, image_URL,metadata_URL) VALUES ('0x10c336c43E6EDeF667C87ce0397fb572E54ea798','https://ipfs.io/ipfs/bafybeiah7htglu4x54xzkupxtgskvc5old6usrqafxvo33ezlqhyfytupu','ipfs://bafkreibrfh3yswxx52ta5wbnbn4ivoh27bxz737jtqurjefq66ksfq262i');

INSERT INTO nfts (creator, image_URL,metadata_URL) VALUES ('0x10c336c43E6EDeF667C87ce0397fb572E54ea798','https://ipfs.io/ipfs/bafybeiejij7jhkll4dmqilrpux4cng2mejizbanyq4pjsyx76yxgcgr6ba','ipfs://bafkreidyy6plddnxkyf3cpzfjrh3ln2otjrghzpj27imjwxzmgkoij6nqa');

INSERT INTO nfts (creator, image_URL,metadata_URL) VALUES('0x10c336c43E6EDeF667C87ce0397fb572E54ea798','https://ipfs.io/ipfs/bafybeif2tvkr5dzb34kltpjv34qvqsmycyy6sg7qpmhy4lh4ao7ag2h62i','ipfs://bafkreibromag4yu6z67j3tlsuxasqt3frpmxvfrd2cuxtrndclnadijfke');

INSERT INTO nfts (creator, image_URL, metadata_URL) VALUES ('0x10c336c43E6EDeF667C87ce0397fb572E54ea798','https://ipfs.io/ipfs/bafybeie76un27tqtu6tu57ug37gfyx73kyoyxfdpi4ptlqkuuhiobj5q44','ipfs://bafkreighh6lcbkildjx6iptukdpj4jguzqtmlnzca7jgsc4jueiiuun674');