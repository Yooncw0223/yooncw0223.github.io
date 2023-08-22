import { process, extractFromvalue, extract } from '../util';

export const contentList = process({
  key: "Projects",
  value: [
    require('./introduction'),
  ]
});

export default function projectList() {
  return contentList;
}
