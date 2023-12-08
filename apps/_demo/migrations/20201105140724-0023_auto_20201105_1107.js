// auto generated by kmigrator
// KMIGRATOR:0023_auto_20201105_1107:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMS4yIG9uIDIwMjAtMTEtMDUgMTE6MDcKCmltcG9ydCBkamFuZ28uY29udHJpYi5wb3N0Z3Jlcy5maWVsZHMuanNvbmIKZnJvbSBkamFuZ28uZGIgaW1wb3J0IG1pZ3JhdGlvbnMsIG1vZGVscwoKCmNsYXNzIE1pZ3JhdGlvbihtaWdyYXRpb25zLk1pZ3JhdGlvbik6CgogICAgZGVwZW5kZW5jaWVzID0gWwogICAgICAgICgnX2RqYW5nb19zY2hlbWEnLCAnMDAyMl9hdXRvXzIwMjAxMTA1XzExMDInKSwKICAgIF0KCiAgICBvcGVyYXRpb25zID0gWwogICAgICAgIG1pZ3JhdGlvbnMuQWRkRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3QnLAogICAgICAgICAgICBuYW1lPSdtZXRhJywKICAgICAgICAgICAgZmllbGQ9ZGphbmdvLmNvbnRyaWIucG9zdGdyZXMuZmllbGRzLmpzb25iLkpTT05GaWVsZChibGFuaz1UcnVlLCBudWxsPVRydWUpLAogICAgICAgICksCiAgICAgICAgbWlncmF0aW9ucy5BZGRGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0ndGVzdCcsCiAgICAgICAgICAgIG5hbWU9J3JhdGluZycsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5JbnRlZ2VyRmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWRkRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3QnLAogICAgICAgICAgICBuYW1lPSdzZXR0aW5ncycsCiAgICAgICAgICAgIGZpZWxkPWRqYW5nby5jb250cmliLnBvc3RncmVzLmZpZWxkcy5qc29uYi5KU09ORmllbGQoYmxhbms9VHJ1ZSwgbnVsbD1UcnVlKSwKICAgICAgICApLAogICAgXQo=

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field meta to test
--
ALTER TABLE "Test" ADD COLUMN "meta" jsonb NULL;
--
-- Add field rating to test
--
ALTER TABLE "Test" ADD COLUMN "rating" integer NULL;
--
-- Add field settings to test
--
ALTER TABLE "Test" ADD COLUMN "settings" jsonb NULL;
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Add field settings to test
--
ALTER TABLE "Test" DROP COLUMN "settings" CASCADE;
--
-- Add field rating to test
--
ALTER TABLE "Test" DROP COLUMN "rating" CASCADE;
--
-- Add field meta to test
--
ALTER TABLE "Test" DROP COLUMN "meta" CASCADE;
COMMIT;

    `)
}