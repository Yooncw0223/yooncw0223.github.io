export const contentList = [
  require('./introduction'),
  require('./website'),
].map(item => item.content);

export default function projectList() {
  return contentList;
}
