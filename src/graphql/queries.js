// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
    id
    stack
    skill
  }
}
`;
export const listSkills = `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      stack
      skill
    }
    nextToken
  }
}
`;
