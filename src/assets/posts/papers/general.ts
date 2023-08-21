export const contentList = [
  require('./introduction'),
].map(item => item.content);

export default function projectList() {
  return contentList;
}
